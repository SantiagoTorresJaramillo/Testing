#!/bin/bash


# Specify the environment variable for the current environment (Staging, Local or Live)
environment_variable="Staging"

yaml_file=".github/workflows/${environment_variable}_e2e-tests.yml"
# Define the contents of the YAML file

yaml_contents=$(cat <<-EOM
name: e2e-tests
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    environment: $environment_variable
    env:
      EMAIL: \${{ secrets.CREDENTIALS.EMAIL }}

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Write the cypress.env.json file 📝
        run: |
          echo '\${{ secrets.CREDENTIALS }}' > cypress.env.json 

      - name: Install dependencies
        run: npm install
      
      - name: Run Prettier
        run: npm run format  

      - name: Run ESLint
        run: npm run lint  

      - name: Run Cypress E2E Tests
        run: npm run chrome  
      
      # Añade más pasos según tus necesidades, como construir y desplegar
EOM
)

# Write the contents to the YAML file
echo "$yaml_contents" > "$yaml_file"

echo "Workflow YAML file created at $yaml_file"
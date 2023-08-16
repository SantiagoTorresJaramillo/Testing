#!bin/bash

if [[ "$1" == "webapp" ]]; then
	if [[ "$2" != "" ]]; then
		npm run testwebapp:spec cypress/integration/$2/*
	else
		npm run testwebapp:run
	fi
elif [[ "$1" == "slack" ]]; then
	npm run testslack:run
elif [[ "$1" == "gui" ]]; then
	if [[ "$2" == "webapp" ]]; then
		npm run testwebapp:gui
	else
		npm run testslack:gui
	fi
fi
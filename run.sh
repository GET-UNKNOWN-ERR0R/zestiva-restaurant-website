#!/bin/bash
cd "$(dirname "$0")"
git clone https://github.com/GET-UNKNOWN-ERR0R/zestiva-restaurant-website.git
cd zestiva-restaurant-website
read -p "Enter the command to start the project (e.g., npm install, npm start): " run_command
eval "$run_command"
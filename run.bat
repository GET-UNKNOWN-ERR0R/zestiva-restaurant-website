@echo off
cd /d "%~dp0"
git clone https://github.com/GET-UNKNOWN-ERR0R/zestiva-restaurant-website.git
cd zestiva-restaurant-website
set /p run_command="Enter the command to start the project (e.g., npm install, npm start): "
%run_command%
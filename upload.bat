@echo off
git init
git remote add origin https://github.com/Sharran06/food-del-application.git
git fetch origin
git branch -M main
git merge origin/main --allow-unrelated-histories
git add .
git commit -m "Complete upload of project files"
git push -u origin main

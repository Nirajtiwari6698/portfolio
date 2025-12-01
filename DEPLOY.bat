@echo off
REM Portfolio Deployment Script for Windows
REM This script builds and deploys your portfolio to GitHub Pages

echo.
echo ========================================
echo   PORTFOLIO DEPLOYMENT SCRIPT
echo ========================================
echo.

REM Step 1: Install dependencies
echo [1/6] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo [OK] Dependencies installed
echo.

REM Step 2: Build the project
echo [2/6] Building project...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo [OK] Build complete
echo.

REM Step 3: Initialize Git (if not already initialized)
if not exist ".git" (
    echo [3/6] Initializing Git repository...
    call git init
    call git branch -M main
    echo [OK] Git repository initialized
) else (
    echo [3/6] Git repository already initialized
)
echo.

REM Step 4: Add all files
echo [4/6] Adding files to Git...
call git add .
echo [OK] Files added
echo.

REM Step 5: Commit
echo [5/6] Committing changes...
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a:%%b)
call git commit -m "Deploy portfolio - %mydate% %mytime%"
echo [OK] Changes committed
echo.

REM Step 6: Check if remote exists
echo [6/6] Checking remote repository...
call git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo ⚠️  Remote repository not configured
    echo.
    echo Please enter your GitHub repository URL:
    echo Example: https://github.com/Nirajtiwari6698/portfolio.git
    echo.
    set /p REPO_URL="Repository URL: "
    call git remote add origin %REPO_URL%
    echo [OK] Remote repository added
) else (
    echo [OK] Remote repository already configured
)
echo.

REM Step 7: Push to GitHub
echo Pushing to GitHub...
call git push -u origin main
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub
    echo Make sure you have configured your GitHub credentials
    pause
    exit /b 1
)
echo [OK] Code pushed to GitHub
echo.

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Go to: https://github.com/Nirajtiwari6698/portfolio
echo 2. Go to Settings ^> Pages
echo 3. Select 'main' branch as source
echo 4. Click Save
echo 5. Your portfolio will be live at:
echo    https://Nirajtiwari6698.github.io/portfolio
echo.
echo ========================================
echo.
pause

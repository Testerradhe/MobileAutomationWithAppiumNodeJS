@echo off
echo Starting Automation Tests...

REM Navigate to the project directory
cd /d "%~dp0"

REM Install dependencies
echo Installing required dependencies...
call npm install

REM Run Login Test
echo Running Login Test...
call npm run login-test

REM Run Order Test
echo Running Order Test...
call npm run order-test

echo All tests completed successfully!
pause

@echo off

echo Building WayneMoir.com
echo ##################

echo.
echo.

echo Installing Node modules
echo -----------------------

call npm install

echo.
echo.

echo Building docs
echo -------------

call jekyll build

start "Watching SASS..." /min grunt 

start "Watching HTML..." /min jekyll build --watch
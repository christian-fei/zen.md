#!/bin/bash

SELENIUM_JAR="selenium.jar"
if [ -f "$SELENIUM_JAR" ]
then
  echo "$SELENIUM_JAR found."
else
  echo "$SELENIUM_JAR not found."
  wget http://selenium-release.storage.googleapis.com/2.45/selenium-server-standalone-2.45.0.jar -O $SELENIUM_JAR
fi

python -m SimpleHTTPServer 9000 &
SERVER_PID=$!

while curl --silent http://localhost:9000
do
  echo "."
  sleep 0.1
done

./node_modules/nightwatch/bin/nightwatch

kill -9 $SERVER_PID

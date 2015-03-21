#!/bin/bash

SELENIUM_JAR="selenium.jar"
if [ -f "$SELENIUM_JAR" ]
then
  echo "$SELENIUM_JAR found."
else
  echo "$SELENIUM_JAR not found."
  wget http://selenium-release.storage.googleapis.com/2.45/selenium-server-standalone-2.45.0.jar -O $SELENIUM_JAR
fi

./node_modules/nightwatch/bin/nightwatch
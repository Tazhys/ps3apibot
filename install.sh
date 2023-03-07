#!/bin/bash

echo "Thanks for using PS3APIBOT by @Tazhys."
sleep 2
echo "Installing dependencies..."

if npm install && npm install colors && npm install cross-fetch; then
    echo "Dependencies installed successfully."
else
    echo "Sorry, automatic install has failed."
fi

#!/bin/bash

echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

echo "Build completed!" 
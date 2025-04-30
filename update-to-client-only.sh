#!/bin/bash

# Script to convert the application to client-only

# Backup original files
echo "Creating backups of original files..."
cp package.json package.json.bak
cp client/src/lib/queryClient.ts client/src/lib/queryClient.ts.bak
cp client/src/components/contact/contact-section.tsx client/src/components/contact/contact-section.tsx.bak

# Apply the changes
echo "Updating files for client-only mode..."
mv package.json.new package.json
mv client/src/lib/queryClient.ts.new client/src/lib/queryClient.ts
mv client/src/components/contact/contact-section.tsx.new client/src/components/contact/contact-section.tsx

# Update the workflow
echo "Updating workflow configuration..."
# Create a new command for the workflow
echo "{
  \"name\": \"Start application\",
  \"command\": \"vite --port 5000 --host 0.0.0.0\",
  \"path\": \"client\"
}" > workflow.json

echo "Conversion complete. You may need to restart the workflow manually."
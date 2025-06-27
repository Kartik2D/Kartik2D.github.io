#!/bin/bash

echo "🚀 Setting up GitHub Pages for Vite project..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ This doesn't appear to be a git repository. Please run 'git init' first."
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ No package.json found. Please run this script from the project root."
    exit 1
fi

echo "✅ Installing dependencies..."
npm install

echo "✅ Building project..."
npm run build

echo "✅ Testing build..."
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the build output."
    exit 1
fi

echo ""
echo "🎉 GitHub Pages setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run deploy' to build and push to the dist branch"
echo "2. Go to your GitHub repository settings"
echo "3. Navigate to Pages section"
echo "4. Select 'Deploy from a branch' as the source"
echo "5. Choose 'dist' branch and '/ (root)' folder"
echo "6. Save the settings"
echo ""
echo "Your site will be available at: https://$(basename $(pwd))"
echo ""
echo "To deploy: npm run deploy" 
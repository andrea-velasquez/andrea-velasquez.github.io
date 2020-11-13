yarnpkg run build
git checkout build
cp -r build/* .
rm -r build
git add .
git commit -m “Update”
git push
git checkout source
echo Deployment complete

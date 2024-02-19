npm run build
az storage blob upload-batch -s ./build/ --account-name diginnovsajt -d '$web' --overwrite

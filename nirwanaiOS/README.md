#Browserstack setup
1. Create an account
2. Use below command to push the apk/ipa file to the browserstack cloud
curl -u "username:accesskey" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@/path"  
3. Go to runner classe and update the app id received from the above command in the capabilities

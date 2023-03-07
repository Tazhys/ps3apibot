Write-Host "Thanks for using PS3APIBOT by @Tazhys."
Start-Sleep -Seconds 2
Write-Host "Installing dependencies..."

if ((npm install) -and (npm install colors) -and (npm install cross-fetch)) {
  Write-Host "Dependencies installed successfully!"
} else {
  Write-Host "Sorry, automatic install has failed."
}

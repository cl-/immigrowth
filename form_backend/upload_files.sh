#!/usr/bin/env bash

### FROM CLIENT, not server
### scp -r FOLDER_LOCATION deployer@pledge4liberty.org:~/scp_transfer
ssh deployer@pledge4liberty.org

# When On Server
cd ~/scp_transfer
sudo mv ~/scp_transfer/* /var/www/html #For this instance of Linux
### mv THE_FILE_PATH_OF_HTML /var/www/html/index.html
cd /var/www/html/
http://pledge4liberty.org



#!/usr/bin/env bash

ssh ubuntu@pledge4liberty.org
cd ~/immigrowth/frontend
git pull
sudo cp -r ~/immigrowth/frontend/* /var/www/html



# ### FROM CLIENT, not server
# ### scp -r FOLDER_LOCATION deployer@pledge4liberty.org:~/scp_transfer
# ssh ubuntu@pledge4liberty.org

# # When On Server
# cd ~/scp_transfer
# sudo mv ~/scp_transfer/* /var/www/html #For this instance of Linux
# ### mv THE_FILE_PATH_OF_HTML /var/www/html/index.html
# cd /var/www/html/
# http://pledge4liberty.org



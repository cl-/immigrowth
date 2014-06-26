
sudo apt-get install apache2
cat /etc/apache2/sites-enabled/000-default.conf |head -12 |tail -1 |sed -e "s/DocumentRoot//g" |sed -e 's/^ *//' -e 's/ *$//' |sed -e 's/\t*//g'
cd /var/www/html

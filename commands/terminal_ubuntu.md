# Terminal commands for Ubuntu

sudo apt-get -f install


sudo apt-get update



sudo apt-get -f install


sudo dpkg --configure -a


sudo systemctl status mongodb 
sudo ufw status 
sudo systemctl enable mongodb




sudo rm -r /var/log/mongodb

sudo rm -r /var/lib/mongodb

sudo apt-get install -y mongodb-org




ubuntu package system is broken

After you get that error, try sudo apt-get -f install to force an install of the files that didn't get loaded because of the error. 
Then try sudo apt-get update again, sudo apt-get -f install back and forth until only the package that has the error is left.
sudo dpkg --configure -a 
and clean the cache 
sudo apt-get clean




sudo kill -9 $(sudo lsof -t -i:3000) 


sudo chmod -R go+w /data/db


ps -ef


ps -ef | grep mongo 


uninstall mongodb ubuntu config file was deleted

sudo apt --fix-broken install



https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#uninstall-mongodb-community-edition 
This is for remove 
sudo apt-get purge mongodb mongodb-server mongodb-server-core mongodb-clients sudo apt-get purge mongodb-org sudo apt-get autoremove 



sudo apt-get purge mongodb mongodb-server mongodb-server-core mongodb-clients sudo apt-get purge mongodb-org sudo apt-get autoremove 


sudo apt remove mongodb-org 






sudo dpkg --configure -a

sudo rm -rf /tmp/mongodb-27017.sock 

netstat -tuplen

sudo tail -f /var/log/mongodb/mongod.log

tail -f /var/log/mongodb/mongod.log

sudo service mongod status

cat /etc/mongod.conf


cat /etc/
vi /etc/mongod.conf 

cat /etc/mongod.conf


sudo service mongod status

sudo service mongod start

sudo systemctl daemon-reload


ps -ef | grep mongo

ps -ef

sudo apt install mongodb-org


sudo apt-get update

sudo apt remove mongodb-org


sudo apt-get --fix-broken install


sudo dpkg --remove --force-remove-reinstreq mongo-server-core


sudo dpkg --remove --force-remove-reinstreq mongo-tools


sudo apt --fix-broken install
sudo apt-get autoremove
ls 
mongod

sudo apt-get update
sudo chmod -R go+w /data/db 
sudo apt install mongodb-org-toolssudo 
apt-get upgrade -f

sudo apt-get clean
sudo chmod -R go+w /data/db

sudo chmod -R go+w /data/db

sudo chmod -R go+w /data/db

sudo dpkg --configure -a

ls –all

cd /usr/local/bin


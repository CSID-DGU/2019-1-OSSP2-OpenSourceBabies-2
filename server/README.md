# Docker-jenkins-Continuous Deployment

### Installation
<pre>
cd /home/ubuntu/
git clone https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2.git
ln -s 2019-1-OSSP2-OpenSourceBabies-2 osbPATH
cd osbPATH
</pre>

### Run
<pre>
# Login For Private Docker Repository
docker login
docker pull uiui97/osbprjt
ionic4 build
</pre>


# RDS MariaDB-phpmyadmin

### Run
<pre>
# if server is terminated, Enter command 'osbprjtDB'
osbprjtDB 
</pre>


# node API server

### Run
<pre>
# if process is terminated, Enter command this
node server.js
</pre>
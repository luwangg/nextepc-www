---
title: CentOS
order: 23
page: docs
---

## CentOS 7

Install the depedencies for building the source
```bash
sudo yum -y install git gcc flex bison make autoconf libtool lksctp-tools-devel libidn-devel gnutls-devel libgcrypt-devel openssl-devel cyrus-sasl-devel
```

Configure EPEL package and install mongo-c-driver. 
```bash
sudo yum -y install epel-release
sudo yum -y install mongo-c-driver-devel
```

Create a `/etc/yum.repos.d/mongodb-org-3.4.repo` file so that you can install Mongo DB directly, and then install it.
```yaml
[mongodb-org-3.4]  
name=MongoDB Repository  
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/  
gpgcheck=1  
enabled=1  
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc  
```

Compile and install NextEPC.
```bash
autoreconf -iv
./configure --prefix=`pwd`/install
make -j `nproc`
sudo make install
```

Setup your network.
```bash
sudo ip tuntap add name pgwtun mode tun
sudo ip addr add 45.45.0.1/16 dev pgwtun
sudo ip link set pgwtun up
```

Run MongoDB server.
```bash
sudo mkdir -p /data/db
sudo mongod
```

Run NextEPC.
```bash
sudo ./nextepc-epcd
```
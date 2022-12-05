# git
git config --global user.name <name>
git config --global user.email <email>
git config --global ore.editor vim
git config --list
git checkout
git stash
git add -i

# vagrant
vagrant init bento/ubuntu-18.04
vagrant box add centos/8

vagrant up
vagrant ssh # vagrant/vagrant

vagrant status
vagrant halt
vagrant reload

vagrant global-status


docker run --rm -it ubuntu
docker ps
docker images



# proxy
sudo cat<<HEREDOC
acl all src 0.0.0.0/0
http_access allow all
HEREDOC > /etc/squid/conf.d/allow.conf
sudo systemctl start squid
sudo systemctl status squid

curl -x proxyhost:3128 https://example.com



ssh -i <key> <user>@host
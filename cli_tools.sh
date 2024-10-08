# git
git config --global user.name <name>
git config --global user.email <email>
git config --global ore.editor vim
git config --list
git checkout
git stash
git add -i
git show
git show HEAD~
git show HEAD~~~ # HEAD~3
git show HEAD~3:cli_tools.sh

# sparse # 一部のディレクトリのみクローンする
git clone --filter=blob:none --sparse <url>
git sparse-checkout set <dir>


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


# server
python -m "http.server"
npx serve
browser-sync start --server 'app' --files 'app'

# echo-server
docker run --rm -p 8080:8080 jmalloc/echo-server
nc -l 8088
nc localhost 8088 # client


ssh -i <key> <user>@host

# ngrok
ngrok http 8080


# binディレクトリ
ls /usr/bin
ls /usr/sbin

# システム設定ディレクトリ(CentOS)
ls /usr/lib/systemd/system # CentOS
ls /lib/systemd/system # Ubuntu
ls /etc/systemd/system

# ログイン時のメッセージ
cat /etc/issue

# リリースバージョン
# cat /etc/<distroname>-release
cat /etc/redhat-release
cat /etc/lsb-release # Ubuntu
cat /etc/debian_version # Debianの場合はreleaseではなくversion
ls /etc/*-release

cat /etc/os-release

cat /proc/version

# Linuxシステムのバージョン
uname -a






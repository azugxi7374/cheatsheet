#!/bin/bash

# env使う例
# #!/usr/bin/env node

# 実行ディレクトリに関わらずカレントディレクトリを移動
cd `dirname $0`

unset VAR

#####################################
## 変数
echo $? # 終了ステータス
echo $! # バックグラウンドプロセス
echo $$ # プロセス
echo $# # 引数の数
echo $0
echo $1 $2 # ...
echo $_

echo $RANDOM
echo $SHELL
echo $PS1

Hoge() {
    echo '$*'
    for s in $*; do echo $s; done
    echo '"$*"'
    for s in "$*"; do echo $s; done
}
Hoge aaa bbb ccc
# $*
# aaa
# bbb
# ccc
# "$*"
# aaa bbb ccc


######################
# リダイレクト
# 入出力: 標準入力, 標準出力, 標準エラー出力, ファイル, リテラル, HEREDOC, 引数ファイル
## -> 標準入力
cat a | wc # 標準出力 -> 標準入力
wc < a # ファイル -> 標準入力
cat<<<$SHELL # 変数(リテラル) -> 標準入力
cat<<<hoge
cat <<HEREDOC
hoge
piyo piyo aaa
poyo?
HEREDOC # HEREDOC -> 標準入力
## -> 引数ファイル
diff <(command1) <(command2)
echo <(echo "piyo") # /dev/fd/63
## -> リテラル
echo `ls`
echo $(ls)
echo `ls hogehoge 2>&1 >/dev/null` # 標準エラー出力 -> リテラル

######################
# 文字列系
awk '{print $1, $NF, $0}'
awk -F. '$NF == "exe" {print $0}'

sed -ne '1,10p'
sed -e 's/hoge/piyo/g'
sed -E 's/h.+e/piyo/g'


########################
# ファイル系
find . -type f -name '*.pdf'

for i in $(seq 1 7); do echo "i = $i"; done

for f in $(find . -type f -name '*.sh'); do echo "$f"; done
# ↓空白がある場合はreadで読む
find . -type f -name '*.sh' | while read arr; do echo "${arr[*]}"; done
# ↑ なんかubuntuだと失敗した。IFSを使ってforすればいい ↓
IFS=$'\n'; for ...

# 
tree
tree -N . # 文字化け回避



env

exit 0

basename /etc/passwd
basename script.sh .sh



mkdir tmp/221119
cd $_

xargs -P2


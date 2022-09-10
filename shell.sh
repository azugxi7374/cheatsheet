#!/bin/bash

find . -type f -name '*.pdf'

for i in $(seq 1 7); do echo "i = $i"; done

for f in $(find . -type f -name '*.sh'); do echo "$f"; done
# ↓空白がある場合はreadで読む
find . -type f -name '*.sh' | while read arr; do echo "${arr[*]}"; done


diff <(command1) <(command2)

VAR=`ls`
VAR=$(ls)
VAR=`ls hogehoge` # ""
VAR=`ls hogehoge 2>&1 >/dev/null` # ls: hogehoge: No such file or directory

unset VAR


echo $? # 終了ステータス
echo $! # バックグラウンドプロセス
echo $$ # プロセス
echo $# # 引数の数
echo $0
echo $1 $2 # ...

Hoge() {
    echo '$*'
    for s in $*; do echo $s; done
    echo '"$*"'
    for s in "$*"; do echo $s; done
}
Hoge aaa bbb ccc
<<HEREDOC
$*
aaa
bbb
ccc
"$*"
aaa bbb ccc
HEREDOC


exit 0

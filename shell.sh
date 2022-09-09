#!/bin/bash

find . -type f -name '*.pdf'

for i in $(seq 1 7); do echo "i = $i"; done

for f in $(find . -type f -name '*.sh'); do echo "$f"; done
# ↓空白がある場合はreadで読む
find . -type f -name '*.sh' | while read arr; do echo "${arr[*]}"; done


diff <(command1) <(command2)

VAR=`ls`
VAR=$(ls)




exit 0

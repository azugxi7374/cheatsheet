
## text系

# _F1に含まれて _F2に含まれない行のみ出力
diff <(cat $_F1 | sort) <(cat $_F2 | sort) | grep '^<' | sed -e 's/^< //'
# c.f.
# https://docs.python.org/ja/3/tutorial/index.html
# https://docs.python.org/ja/3/library/index.html
# https://docs.python.org/ja/3/reference/index.html

17/3 # => 5.666666666666667
17//3 # => 5
17%3 # => 2
5 ** 2 # => 25


############################################
# strings
print('C:\some\name')
# C:\some
# ame
print(r'C:\some\name')
# C:\some\name
print("""hoge
piyo
foo\
bar""")
# hoge
# piyo
# foobar

"hoge"[2] #=> 'g'
"hoge"[-1] #=> 'e'
"hoge"[10] #=> IndexError: string index out of range
"hoge"[1:2] #=> 'o'
"hoge"[1:] #=> 'oge'
"hoge"[:] #=> 'hoge'
len("hoge")

x,y,z = 5,'hoge',[1,2,3]
'{} {} {}'.format(x,y,z) # => '5 hoge [1, 2, 3]'
'{1} {0} {2}'.format(x,y,z) # => 'hoge 5 [1, 2, 3]'

#lists
[1,2,3]+[4,5,6] #=> [1, 2, 3, 4, 5, 6]



#####################################
if 0==1:
    print(1)
elif 0==2:
    print(2)
else:
    pass

for x in [1,2,3]:
    print(x)
for x in range(5):
    print(x)



#####################################
# files
with open('hoge.txt', 'w') as f:
    f.write('hello\n')

with open('./python/python.py', 'r') as f:
    for line in f:
        print(line, end='')



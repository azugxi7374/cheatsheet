# c.f. https://docs.python.org/ja/3/tutorial/index.html



x=5
y='hoge'
z=[1,2,3]

'{} {} {}'.format(x,y,z)
# => '5 hoge [1, 2, 3]'

'{1} {0} {2}'.format(x,y,z)
# => 'hoge 5 [1, 2, 3]'




#####################################
# files
with open('hoge.txt', 'w') as f:
    f.write('hello\n')

with open('./python/python.py', 'r') as f:
    for line in f:
        print(line, end='')


# TODO if, for

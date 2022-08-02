# ref: https://tutorials.chainer.org/ja/08_Introduction_to_NumPy.html
import numpy as np

a = np.array([1, 2, 3])
b = np.array(
    [[1, 2, 3],
     [4, 5, 6]]
)

## shapes
a.shape #=> (3,)
b.shape #=> (2, 3)
a.ndim #=> 1
b.ndim #=> 2
a.size #=> 3
b.size #=> 6

## fill
c = np.full((3, 2), 5) # => array([[5, 5],[5, 5],[5, 5]])

## select
b[0,1] #=> 2
b[0][1] #=> 2
b[0, -2] #=> 2
b[0, -4] #=> error

b[0][1:3] #=> array([2, 3])
b[0][1:] #=> array([2, 3])
b[[0,1,0],[0,1,2]] #=> array([1, 5, 3])

## type
b.dtype #=> dtype('int64')


x=np.array([[1,2,3],[4,5,6]])
y=np.array([[9,8,7],[6,5,4]])
x+y
x*y
np.sqrt(x)
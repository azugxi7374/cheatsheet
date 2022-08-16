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
np.zeros((2,3))
np.zeros_like(c)

## select
b[0,1] #=> 2
b[0][1] #=> 2
b[0, -2] #=> 2
b[0, -4] #=> error

b[0][1:3] #=> array([2, 3])
b[0][1:] #=> array([2, 3])
b[[0,1,0],[0,1,2]] #=> array([1, 5, 3])

b%2==0 #=> array([[False,  True, False], [ True, False,  True]])
b[b%2==0] #=> array([2, 4, 6])
b[b%2==0] = 9; b #=> array([[1, 9, 3], [9, 5, 9]])


## type
b.dtype #=> dtype('int64')
b.astype(np.float32)
b.astype(np.uint8)

## +-*/
x=np.array([[1,2,3],[4,5,6]])
y=np.array([[9,8,7],[6,5,4]])
x+2
x+[3,4,5]

x+y
x*y
np.sqrt(x)

x.min() #=> 1
x.max() #=> 6
x.mean()
x.std()

np.clip(x,2,4) #=> array([[2, 2, 3], [4, 4, 4]])


# 変形
x.ravel() #=> array([1, 2, 3, 4, 5, 6])
_x,_y=np.meshgrid([1,2,3],[4,5,6])
#=> _x = array([[1, 2, 3], [1, 2, 3], [1, 2, 3]])
#   _y = array([[4, 4, 4], [5, 5, 5], [6, 6, 6]])

np.repeat([1,2,3], 2) #=> array([1, 1, 2, 2, 3, 3])
np.repeat([[1,2,3],[4,5,6]], 2, axis = 0)
#=> array([[1, 2, 3], [1, 2, 3], [4, 5, 6], [4, 5, 6]])
np.repeat([[1,2,3],[4,5,6]], 2, axis = 1)
#=> array([[1, 1, 2, 2, 3, 3], [4, 4, 5, 5, 6, 6]])

np.expand_dims([1,2,3], axis=0)#=>array([[1, 2, 3]])
np.expand_dims([1,2,3], axis=1)#=>array([[1], [2], [3]])
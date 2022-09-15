import numpy as np
import pandas as pd

# create DataFrame
df = pd.DataFrame([
    ['hoge', 1],
    ['fuga', 5],
    ['piyo', 2],
    ['foo', 123],
    ['hoge', 5],
    ['piyo', 0],
    ['hoge', 99],
], columns=['col1', 'col2'])

pd.DataFrame(index=df['col1'].drop_duplicates())
df.copy()
df[['col1', 'col2']]

pd.read_table('dummy.txt', header=None, names=['col1', 'col2'])

#
df.to_numpy().tolist()


#
df.head(2)
df.sample(n=5)
df.describe()

# filter
df[df['col2'] > 4]
df.query('col2 > 4 & col2 < 100')

df['col2_2'] = df['col2'].map(lambda x: x*2)

# group
df.groupby('col1').sum()
df.groupby('col1').count()
df.groupby('col1').max()

df.sort_values('col2', ascending=False)

df2 = pd.DataFrame()
pd.merge(df, df2, how='left')

df2.fillna(0)

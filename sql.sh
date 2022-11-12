# sqlite
.mode csv
.import "./hoge.csv" hoge
.tables
select * from hoge limit 10;

# CREATE TABLE username(id, name);
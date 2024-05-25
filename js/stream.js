const fs = require('fs')

// Node.js streams cheatsheet: https://devhints.io/nodejs-stream
path = "./stream.js"
function stream1() {
    const src = fs.createReadStream(path, 'utf-8');
    const dest = fs.createWriteStream('/dev/stdout', 'utf8');
    src.on('data', chunk => dest.write(chunk));
    src.on('end', () => dest.end());
}
function stream2() {
    const src = fs.createReadStream(path, 'utf-8');
    const dest = fs.createWriteStream('/dev/stdout', 'utf8');
    src.pipe(dest)
}



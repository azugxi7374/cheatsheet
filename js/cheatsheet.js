() => {
  const { a, b } = {
    a: "hoge",
    b: "piyo"
  }
  const [c, d] = [1, 2]
}

Array.from(document.querySelectorAll('div'))
Array(1, 2) // (2) [1, 2]
Array(3) // (3) [empty × 3]
Array.of(1) // [1]
Array.of(1, 2, 3) // (3) [1, 2, 3]
  // 値埋め
  ([...Array(5)]).fill(3)
// 範囲
function range(n) {
  return ([...Array(n)]).map((_, i) => i)
}

Object.fromEntries([["hoge", 1], ["piyo", 2]]) // {hoge: 1, piyo: 2}
Object.keys(obj)

Object.groupBy([1,2,3,4,5], (v, i) => v % 2) // [[2, 4], [1, 3, 5]]

// ?.
var b = {}
b.piyo.toUpperCase().length // ERROR
b.piyo?.toUpperCase().length // undefined
var a1 = null, a2 = 0, b = "some string";
(a1 ?? b) // "some string"
(a2 ?? b) // 0
(a2 || b) // "some string"


  (123.00).toFixed() // => "123"
  (123.00).toFixed(1) // => "123.0"
"3".padStart(3, "0") // => "003"

const uri = ""
const encoded = encodeURI(uri)
decodeURI(encoded)

decodeURIComponent(encodeURIComponent(uri))


btoa("hogepiyo") // 'aG9nZXBpeW8='
atob(btoa("hogepiyo")) // 'hogepiyo'

"abcde".charCodeAt(2); // 99
// UTF-8
(new TextEncoder).encode("😄"); // [240, 159, 152, 132]
// UTF-16
[0, 1, 2].map(i => "😄".charCodeAt(i)); // [55357, 56836, NaN]
// Unicode
"😄".codePointAt(0) // 128516
"\u{1f604}" // '😄'

// 文字列
function _strings() {
  // regex
  const m = "abcde".match("b(c.+)e")
  m[0] // 'bcde'
  m.index // 1
  m[1] // 'cd'
}

async function fetch1() {
  const res = await fetch('http://example.com')
  res.status // 200
  const t = await res.text()
  console.log(t)
  const js = await res.json() // read後なのでerror
  const blob = await res.blob()
}
// バイト列
async function fetch2() {
  const res = await fetch('http://example.com')
  const ab = await res.arrayBuffer()
  return new Uint8Array(ab)
}

function sleep(ms) {
  const p = new Promise((res, rej) => {
    setTimeout(() => res(), ms);
  });
  return p;
}


////////////////////////////////
// process
{
  const some_env = process.env["ENV_NAME"]
  const [node, prog, ...args] = process.argv

  const { execFileSync } = require('child_process')
  try {
    execFileSync('pdftoppm', ['-v'], { stdio: 'ignore' })
  } catch (e) {
    console.error(e.message);
    process.exit(1)
  }
}

// files
const os = require('os')
const fs = require('fs');
const readline = require("readline");
const ospath = require("path");

function createInputStream(file = '/dev/stdin') {
  const stream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: stream
  });
  return rl;
}
for await (const line of createInputStream()) {
  // something
}


async function withTmpDir(callback, remove = true) {
  const osTmpDir = os.tmpdir();
  const tmpDirPath = fs.mkdtempSync(`${osTmpDir}${ospath.sep}`)

  let ret;
  try {
    ret = await callback(tmpDirPath);
  } catch (e) {
    throw e;
  } finally {
    if (remove) {
      fs.rmSync(tmpDirPath, { force: true, recursive: true });
    }
  }

  return ret;
}

// 並列promise
async function batchPromise(batchSize) {
  let a = []
  for (const line of list) {
    if (a.length === batchSize) {
      await Promise.all(a);
      a = [];
    }
    a.push(f(line))
  }
  await Promise.all(a);
}
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
Object.fromEntries([["hoge", 1], ["piyo", 2]]) // {hoge: 1, piyo: 2}
Object.keys(obj)

(123.00).toFixed() // => "123"
(123.00).toFixed(1) // => "123.0"


const uri = ""
const encoded = encodeURI(uri)
decodeURI(encoded)


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

{
    const res = await fetch('http://example.com')
    res.status // 200
    const t = await res.text()
    console.log(t)
    const js = await res.json() // read後なのでerror
}
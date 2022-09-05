() => {
    const { a, b } = {
        a: "hoge",
        b: "piyo"
    }
    const [c, d] = [1, 2]
}

Array.from(document.querySelectorAll('div'))
Array(1,2) // (2) [1, 2]
Array(3) // (3) [empty × 3]
Array.of(1) // [1]
Array.of(1,2,3) // (3) [1, 2, 3]
Object.fromEntries([["hoge",1],["piyo",2]]) // {hoge: 1, piyo: 2}


const uri=""
const encoded = encodeURI(uri)
decodeURI(encoded)


btoa("hogepiyo") // 'aG9nZXBpeW8='
atob(btoa("hogepiyo")) // 'hogepiyo'

"abcde".charCodeAt(2) // 99
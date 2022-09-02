() => {
    const { a, b } = {
        a: "hoge",
        b: "piyo"
    }
    const [c, d] = [1, 2]
}

const uri=""
const encoded = encodeURI(uri)
decodeURI(encoded)


btoa("hogepiyo") // 'aG9nZXBpeW8='
atob(btoa("hogepiyo")) // 'hogepiyo'

"abcde".charCodeAt(2) // 99
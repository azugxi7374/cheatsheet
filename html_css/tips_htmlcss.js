// CSSの解決値を取得
// getComputedStyle
const e = {/*...*/}; // 要素
const compStyles = document.defaultView.getComputedStyle(e)
compStyles.width
compStyles.color

// promiseのwrapper
// onloadがload直後にしか発火しない問題の解決
function onloadWrapper() {
    let res;
    const p = new Promise((resolve, reject) => {
        res = resolve;
    });
    return [res, p]
}
const [onload, loaded] = onloadWrapper
// <... onload="onload()" ... />
// loaded.then(()=>...)

const uri=""
const encoded = encodeURI(uri)
decodeURI(encoded)


btoa("hogepiyo") // 'aG9nZXBpeW8='
atob(btoa("hogepiyo")) // 'hogepiyo'
// CSSの解決値を取得
// getComputedStyle
const e = {/*...*/ }; // 要素
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

const uri = ""
const encoded = encodeURI(uri)
decodeURI(encoded)


btoa("hogepiyo") // 'aG9nZXBpeW8='
atob(btoa("hogepiyo")) // 'hogepiyo'



history.pushState("", "title", "/dummy")
// or history.replaceState
// history.go(-1)

/////////////////////
// HTMLのサイズ関連
// ↓スマホで画面サイズ取得に使う
[window.parent.screen.height, window.parent.screen.width] // window.topでいいのでは？

[window.innerHeight, window.innerWidth] // ビューポートのサイズ

const elem1 = document.body;
[elem1.clientHeight, elem1.clientWidth] // padding含む内側サイズ
const elem2 = document.querySelector('a')
[elem2.clientHeight, elem2.clientWidth] // inlineでは0



// events
document.addEventListener('DOMContentLoaded', () => { });
{
    const element = document.querySelector('input');
    element.addEventListener('change', (e) => {
        e.target.value
        e.preventDefault();
        e.stopPropagation();
    });
    element.addEventListener('click', (e) => {
        const mx = e.offsetX, my = e.offsetY;
    });
    'mousemove'
    'input'

}

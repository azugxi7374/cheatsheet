var elem1, elem2, position
elem1.insertAdjacentElement(position, elem2)
// position: 'beforebegin' 'afterbegin' 'beforeend' 'afterend'

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

// speech
function speechCancel() {
    window.speechSynthesis.cancel();
}
function speech(text) {
    synthesis = window.speechSynthesis
    utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
}



// 画像データ変換系 (canvas, img, base64)
// 右クリックで画像ダウンロードも可能
function canvasTobase64(canvas) {
    const ctx = canvas.getContext('2d');
    { // draw
        canvas.height = 100
        canvas.width = 200
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 50, 50)
        ctx.strokeStyle = "rgb(255,128,0,1)"
        ctx.lineWidth = 15;
        ctx.strokeRect(25, 10, 50, 50)
    }

    const dataURL = canvas.toDataURL("image/png"); // -> base64
    return dataURL
}

function base64ToImage(base64, onImgload) {
    const img = new Image()
    img.src = base64
    img.onload = onImgload(img)
    return img;
    // ex. document.body.appendChild(img)
}

function imageToBase64(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return canvasTobase64(canvas)
}
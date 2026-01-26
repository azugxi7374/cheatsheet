/////////////////////////////////////////////////////////////
// Audio
// 簡易ビープ音。
// 複雑な場合はTone.jsを使う
function playBeep() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = 'sine';
    oscillator.start();
    setTimeout(() => oscillator.stop(), 200);
    // ↑これだとぶつ切りになるのでgainを使うとかする
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



// 通知
new Notification("TITLE HERE", {
    body: "body", 
    requireInteraction: true // 消えないようにするにはtrue
});

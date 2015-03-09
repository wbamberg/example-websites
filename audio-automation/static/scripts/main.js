
function playAutomated() {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  var initialFreq = 3000;
  var initialVol = 0.001;

  oscillator.type = 'square';
  oscillator.frequency.value = initialFreq; // value in hertz
  oscillator.detune.value = 100; // value in cents

  gainNode.gain.value = initialVol;

  var param = oscillator.frequency;
  var t0 = 0;
  var t1 = 1;
  var t2 = 2;
  var t3 = 3;
  var t4 = 4;
  var t5 = 6;
  var t6 = 7;
  var t7 = 10.0;

  var curveLength = 44100;
  var curve = new Float32Array(curveLength);
  for (var i = 0; i < curveLength; ++i)
    curve[i] = Math.sin(Math.PI * i / curveLength);

  param.setValueAtTime(0.2 * initialFreq, t0);
  param.setValueAtTime(0.3 * initialFreq, t1);
  param.setValueAtTime(0.4 * initialFreq, t2);
  param.linearRampToValueAtTime(1 * initialFreq, t3);
  param.linearRampToValueAtTime(0.15 * initialFreq, t4);
  param.exponentialRampToValueAtTime(0.75 * initialFreq, t5);
  param.exponentialRampToValueAtTime(0.05 * initialFreq, t6);
  param.setValueCurveAtTime(curve, t6, t7 - t6);

  oscillator.start();
}

function playMultiNode() {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var oscillator = audioCtx.createOscillator();
  var synthDelay = audioCtx.createDelay(5.0);
  var gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(synthDelay);
  synthDelay.connect(audioCtx.destination);

  var initialFreq = 3000;
  var initialVol = 0.001;

  oscillator.type = 'square';
  oscillator.frequency.value = initialFreq; // value in hertz
  oscillator.detune.value = 100; // value in cents

  gainNode.gain.value = initialVol;

  oscillator.start();

}

var playAutomatedButton = document.getElementById("play-automated");
playAutomatedButton.addEventListener("click", playAutomated, false);

var playMultiNodeButton = document.getElementById("play-multinode");
playMultiNodeButton.addEventListener("click", playMultiNode, false);

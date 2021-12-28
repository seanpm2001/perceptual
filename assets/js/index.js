(()=>{var e={584:function(e){e.exports=(()=>{var e={607:(e,t,n)=>{var o,l,i;!function(r){if("object"==typeof e.exports){var u=r(n(875),t);void 0!==u&&(e.exports=u)}else l=[n,t],void 0===(i="function"==typeof(o=r)?o.apply(t,l):o)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.amplitudeToPerceptual=t.perceptualToAmplitude=void 0,t.perceptualToAmplitude=function(e,t=1,n=50,o=6){if(0===e)return 0;let l;return l=e>t?(e-t)/t*o:e/t*n-n,t*Math.pow(10,l/20)},t.amplitudeToPerceptual=function(e,t=1,n=50,o=6){if(0===e)return 0;const l=20*Math.log10(e/t);let i;return i=l>0?l/o+1:(n+l)/n,t*i}}))},875:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=875,e.exports=t}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}return n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(607)})()}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";const e=n(584),t=["1","2"];function o(e,t){for(const n in e)n!==t&&l(e,n);const n=e[t];n.playButton.innerText="Stop Tone",n.iconPlayButton.classList.replace("fa-play","fa-stop"),n.divVolume.hidden=!1}function l(e,t){const n=e[t];n.playButton.innerText="Play Tone",n.iconPlayButton.classList.replace("fa-stop","fa-play"),n.divVolume.hidden=!0}(()=>{let n=new AudioContext,i=n.createOscillator(),r=n.createGain();i.connect(r),i.type="sine",i.frequency.value=440,r.gain.value=.5,i.start();const u=function(){const e={};for(const n of t)e[n]={},e[n].playButton=document.getElementById(`play-button-${n}`),e[n].volume=document.getElementById(`input-volume-${n}`),e[n].divVolume=document.getElementById(`div-volume-${n}`),e[n].labelPlayButton=document.getElementById(`label-play-button-${n}`),e[n].iconPlayButton=document.getElementById(`icon-play-button-${n}`),e[n].labelSlider=document.getElementById(`label-slider-${n}`),e[n].labelAmplitude=document.getElementById(`label-amplitude-${n}`);return e}();let a="stopped";u[1].playButton.addEventListener("click",(()=>{n.resume(),"stopped"===a?(r.connect(n.destination),a="running-1",o(u,"1")):"running-2"===a?(a="running-1",o(u,"1")):(r.disconnect(n.destination),a="stopped",l(u,"1"))}),!1),u[2].playButton.addEventListener("click",(()=>{n.resume(),"stopped"===a?(r.connect(n.destination),a="running-2",o(u,"2")):"running-1"===a?(a="running-2",o(u,"2")):(r.disconnect(n.destination),a="stopped",l(u,"2"))}),!1),u[1].volume.addEventListener("input",(()=>{const e=u[1].volume.valueAsNumber;u[1].labelSlider.innerText=`Slider Position: ${e}%`,u[1].labelAmplitude.innerText=`Amplitude: ${e}%`,"stopped"!==a&&"running-1"!==a||(r.gain.value=e/100)}),!1),u[2].volume.addEventListener("input",(()=>{const t=u[2].volume.valueAsNumber,n=(0,e.perceptualToAmplitude)(t,100);u[2].labelSlider.innerText=`Slider Position: ${t}%`,u[2].labelAmplitude.innerText=`Amplitude: ${n.toFixed(3)}%`,"stopped"!==a&&"running-2"!==a||(r.gain.value=n/100)}),!1)})()})()})();
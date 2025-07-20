// const touchHandler = (ev) => {
// 	ev.preventDefault() // Prevent text selection
// }
// document.addEventListener('touchstart', touchHandler, {passive:false})
// document.addEventListener('touchmove', touchHandler, {passive:false})
// document.addEventListener('touchend', touchHandler, {passive:false})
// document.addEventListener('touchcancel', touchHandler, {passive:false})

document.getElementById("btn-end-turn").onclick = function () {
  document.getElementsByClassName("player-field")[0].classList.add("closed");
};

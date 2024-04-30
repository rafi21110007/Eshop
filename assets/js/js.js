function on() {
  var menunBar = document.getElementById("menuBar");

  var overlay = document.getElementById("overlay");

  menunBar.classList.toggle("menuBarStyle");
  overlay.classList.toggle("overlayStyle");
}

function kategoryOn() {
  var kategoryy = document.getElementById("kategory");

  kategoryy.classList.toggle("kategoryStyle");
}

 const inputs = document.querySelectorAll('.input')

 function focusFunc(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
 }

 function blurFunc(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove('focus');
  }
 
 }

 inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur',blurFunc);
 });
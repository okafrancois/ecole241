let oka = document.querySelector('div.oka');
let button = document.querySelector('#btn');
let crier = function(e){
  alert("OKA !!");
}
let message = function(e){
  alert("J'ai clic sur le bouton");
  e.stopPropagation();
}
oka.addEventListener('click', crier);
button.addEventListener('click', message)

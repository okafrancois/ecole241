let skLevels = document.querySelectorAll('.skill-level');

for (var i = 0; i < skLevels.length; i++) {
  let value = skLevels[i].parentNode.parentNode.querySelector("span:last-of-type").textContent;
  skLevels[i].style.width = value;
}

let calcButtons = document.getElementsByClassName("calcBtn");

console.log(calcButtons);


for (let i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function(e) {
      console.log(e);
    });
}
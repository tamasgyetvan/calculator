/**Event listener for calcBtn ID objects */

let calcButtons = document.querySelectorAll(".calcBtn")
    .forEach(button => button.addEventListener("click", function(e) {
        console.log(e.target.getAttribute("data-value"))

    }));
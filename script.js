/**resultContainer in a variable */
const resultContainer = document.querySelector(".resultContainer");

/**Container for first number */
let number1 = "";


/**Event listener for calcBtn ID objects */

let calcButtons = document.querySelectorAll(".calcBtn")
    .forEach(button => button.addEventListener("click", function(e) {
        console.log(e.target.getAttribute("data-value"));
        const dataValue = e.target.getAttribute("data-value");
        appendValue(dataValue);
    }));

/**Function to append button data-value to resultContainer */

function appendValue(value) {
    number1+=value;
    resultContainer.innerHTML = number1;

}

/**Function to reset number1 and resultContainer's innerHTML, it clears everything from resultContainer */

function clearResultContainer() {
    number1 = "";
    resultContainer.innerHTML = "0";

}

/**Clear button functioning */

let cButton = document.getElementById("acBtn").addEventListener("click", function(e) {

    clearResultContainer();
})

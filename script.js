/**resultContainer in a variable */
const resultContainer = document.querySelector(".resultContainer");

/**Container for inputs */
let input = ""
let number1 = "";
let number2 = "";
let operation = "";


/**Event listener for calcBtn ID objects */

let calcButtons = document.querySelectorAll(".calcBtn")
    .forEach(button => button.addEventListener("click", function(e) {
        console.log(e.target.getAttribute("data-value"));
        const dataValue = e.target.getAttribute("data-value");
        appendValue(dataValue);
    }));

/**Function to append button data-value to resultContainer */

function appendValue(value) {
    input+= value;
    resultContainer.innerHTML = input;


}

/**Function to reset number1 and resultContainer's innerHTML, it clears everything from resultContainer */

function clearResultContainer() {
    number1 = "";
    number2 = "";
    input = "";
    operation = "";
    resultContainer.innerHTML = "0";

}

/**Clear button functioning */

let cButton = document.getElementById("acBtn").addEventListener("click", function(e) {

    clearResultContainer();
})

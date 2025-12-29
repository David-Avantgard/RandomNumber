/*--------------------------------------------------------------------------------------------------
Author: David Carvalho
Date: 28/12/2025
Project: Number Generator (Random Number Picker)
Description: Script responsible for generating a random number between user-defined values
and displaying the result on the screen with suspense and highlight.
--------------------------------------------------------------------------------------------------*/

// Main function called when the "SORTEAR" button is clicked
function generateButton() {

    // Captures the values entered in the inputs
    const minValueInput = document.querySelector(".minValue").value;
    const maxValueInput = document.querySelector(".maxValue").value;

    // Converts the values to integers
    const min = parseInt(minValueInput);
    const max = parseInt(maxValueInput);

    // Validation: checks if the values are valid numbers
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira números válidos em ambos os campos!");
        return; // Stops the function if not valid
    }

    // Validation: the "Between" value cannot be greater than the "and" value
    if (min > max) {
        alert("O valor 'Entre' não pode ser maior que o valor 'e'!");
        return; // Stops the function if invalid
    }

    // Selects the h1 that displays the result
    const resultSpan = document.querySelector("#result-number");
    
    // 800ms delay before showing the real number
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Updates the h1 with the drawn number
        resultSpan.textContent = `🎲 O número sorteado é… ${randomNumber}`;

        // Log in the console for learning
        console.log("Min:", min, "Max:", max, "Result:", randomNumber);
    }, 800);
}

// Selects the button and adds click event
const generateBtn = document.querySelector(".generateButton");
generateBtn.addEventListener("click", generateButton);


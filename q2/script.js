// Select input, button, and result display elements
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

// Define the validation and comparison function
function checkInput() {
  const rawValue = userInput.value.trim();

  // Check if the input is empty or whitespace-only
  if (rawValue === "") {
    resultParagraph.textContent = "Please enter a valid number!";
    return;
  }

  // Convert the trimmed string to a number
  const num = Number(rawValue);

  // Check if conversion failed (NaN) or is not a finite number
  if (Number.isNaN(num) || !Number.isFinite(num)) {
    resultParagraph.textContent = "Please enter a valid number!";
  } else if (num < 10) {
    resultParagraph.textContent = "The number is lower than 10";
  } else if (num > 10) {
    resultParagraph.textContent = "The number is higher than 10";
  } else {
    resultParagraph.textContent = "The number is equal to 10";
  }
}

// Register the click event listener
checkButton.addEventListener("click", checkInput);
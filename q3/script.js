// Select the button and ordered list elements
const generateButton = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Define the function to generate list items 1 through 5
function generateNumbers() {
  // Clear existing list items so repeated clicks do not duplicate output
  numberList.textContent = "";

  // Loop from 1 to 5 and create list items dynamically
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${i}`;
    numberList.appendChild(listItem);
  }
}

// Attach the click event listener to the button
generateButton.addEventListener("click", generateNumbers);
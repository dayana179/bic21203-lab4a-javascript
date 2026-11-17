// Select the paragraph and button elements from the DOM
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// Define the function to update the paragraph text
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// Attach the click event listener to the button
changeButton.addEventListener("click", changeMessage);
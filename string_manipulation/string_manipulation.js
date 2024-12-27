function manipulateString(inputString) {
    // Helper function to check if a character is a vowel
    const isVowel = (char) => 'aeiouAEIOU'.includes(char);

    // Result array to construct the output string
    let result = [];

    // Loop through each character in the input string
    for (let char of inputString) {
        if (isVowel(char)) {
            // Skip vowels
            continue;
        } else if (char >= 'a' && char <= 'z') {
            // Convert lowercase letters to uppercase
            result.push(char.toUpperCase());
        } else if (char >= 'A' && char <= 'Z') {
            // Convert uppercase letters to lowercase
            result.push(char.toLowerCase());
        } else {
            // Keep non-alphabetic characters unchanged
            result.push(char);
        }
    }

    // Join the result array into a string and return it
    return result.join('');
}

 

// HTML Frontend test (Pls open the HTML file in a browser.)
const form = document.getElementById('string-form');
const inputField = document.getElementById('input-string');
const resultDisplay = document.getElementById('result-display');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // this will Prevent the form from refreshing the page
    const inputValue = inputField.value;
    const result = manipulateString(inputValue);
    resultDisplay.textContent = `${result}`;
});

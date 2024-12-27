export function manipulateString(inputString) {
    // Helper function to check if a character is a vowel
    const isVowel = (char) => 'aeiouAEIOU'.includes(char);

    // Result array to construct the output string
    let result = [];

    // Loop through each character in the input string
    for (const char of inputString) {
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

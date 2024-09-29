/**
 * Converts the first letter of each word in a string to uppercase.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string with each word capitalized.
 */
export const toUpperCaseStr = (str) => {
  if (!str) return ""; // Return an empty string if input is falsy

  return str
    .trim() // Remove leading and trailing whitespace
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lowercase the rest
    .join(" "); // Join the words back into a string
};

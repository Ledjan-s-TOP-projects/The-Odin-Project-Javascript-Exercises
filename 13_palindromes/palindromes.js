const palindromes = function (string) {
  let cleanedString = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let reversedString = cleanedString.split("").reverse().join("");
  return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;

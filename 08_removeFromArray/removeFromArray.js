const removeFromArray = (arr, ...itemsToRemove) => {
  return arr.filter((element) => !itemsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

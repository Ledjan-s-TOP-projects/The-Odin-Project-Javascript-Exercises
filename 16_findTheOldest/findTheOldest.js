function calculateAge(person) {
  let death = person.yearOfDeath || new Date().getFullYear();
  let age = death - person.yearOfBirth;
  return age;
}

const findTheOldest = function (array) {
  let oldest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (calculateAge(array[i]) > calculateAge(oldest)) {
      oldest = array[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

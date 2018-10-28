function whichSchool(age) {
  var schoolReco = "You should go to "
  if (age < 13) {
    return schoolReco + "Elementary School.";
  } else if (age >= 13, age <= 18) {
    return schoolReco + "Secondary School.";
  } else {
    return schoolReco + "Lighthouse Labs.";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
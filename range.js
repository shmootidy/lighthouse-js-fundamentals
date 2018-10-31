function range(start, end, step) {
  var numList = [];
  if (step < 0) {
    return [];
  }
  for (var n = start; n <= end; n = n + step) {
    numList.push(n);
  }
  return numList;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 10, -1));

//putting this aside for now; cannot complete
//total time so far: 1 hr 50 m
//I got it! It still won't submit, though :(
//total work time, including research and the sudden breakthrough that I needed to "return" the numList, not console.log it..
//3 hr
//so the problem with the crashing was that i hadn't included an "if" statement to kill the loop if the step was negative;
//thanks forum!
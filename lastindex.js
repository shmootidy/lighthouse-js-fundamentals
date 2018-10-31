function lastIndexOf (array, value) {
  var foundMatch = false;
  var result = 0;

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      result = i;
      foundMatch = true;
      break;
    }
  }
  if(foundMatch) {
    return result;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([1], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);
//11:06 - 11:33
//note: previous work and time spent on project so far is under test.js


//NOTE: all following code is incorrect from my original attempts before accessing the forum.
var array = [];
var indexNum = 0;

function lastIndexOf(array, x) {
  for (var i = array.length - 1; i >= 0; i--){
    if (array[i] === x) {
      indexNum--;
    }
    return array[x];
    //return Object.keys(array);
  }
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


//11:21pm - 12:41
//hmm, I still haven't figured out what the "=?" means.
//oohh, that's the output! okay, so I'm trying to get the array portion to match it
//10am - 11:45
//breaktrough this morning was to use the square brackets on the return (i.e., array[x])
//but I do'nt understand why my output for lines 20 and 21 are wrong...

//9:48 - 10 / 10:15 - 10:35/ 10:45 - 10:54
//idea: change the value of the array; or like... ah fuck, still not sure why 20 & 21 are wrong
//maybe I need to break from the loop...
//omg! move backwards!! christtt!!!!
//pausing here for a second to review why the other code crashed the website.
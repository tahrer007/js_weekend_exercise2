//Ex7

///------basic-----------------------
const arr = [1, 2, 3, "test", true, "the last", "school"];
/*const ReadyForEach = arr.forEach(element => {
    console.log(element)
});
const readyMap = arr.map((b)=> b * 2);
console.log(readyMap);

const readyFilter = arr.slice().filter((b)=> typeof b ==='string');
console.log(readyFilter);*/

///-----------advanced------------------
function ImforEach(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

function ImpFilter(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") arr2.push(arr[i]);
  }

  return arr2;
}

function ImpMap(arr) {
  let arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    arr3.push(arr[i] * 2);
  }

  return arr3;
}

console.log("**************the advanced methods : ************");

ImforEach(arr);
console.log(ImpFilter(arr));
console.log(ImpMap(arr));

//Ex6.3
let str1 = "aaaabcdefgggg";
let str2 = "tlmnopqrsttttww";

function longestStr(str1, str2) {
  let arr1 = str1.toLowerCase().split("");
  let arr2 = str2.toLowerCase().split("");
  let charObj = {};
  arr1.forEach((element) => {
    charObj.hasOwnProperty(element) ? "" : (charObj[element] = 1);
  });
  arr2.forEach((element) => {
    charObj.hasOwnProperty(element) ? "" : (charObj[element] = 1);
  });
  let output = "";
  for (const key in charObj) {
     
      output+=key
  }
  return output;
}
console.log(longestStr(str1, str2));

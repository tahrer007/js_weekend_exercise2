//Ex6.4
//Ex6.3
let str1 = "aa";
let str2 = "agfjwloti";
function isogram (str){
    let arr = str.toLowerCase().split("");
    let charObj = {};
    arr.forEach(element => {
      //console.log(charObj.hasOwnProperty(element));
      let test = charObj.hasOwnProperty(element) ; 
      if(test){
          return false} ; 
      charObj[element]=1 ; 
        
    });
    console.log(charObj);
    return  true ;
}

console.log(isogram (str1));
//console.log(isogram (str2))
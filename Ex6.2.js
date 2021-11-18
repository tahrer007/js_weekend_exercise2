//Ex 6.2
let str = "AAAAAAAA aaaaaaaa"; 
function checkCount (item)
{
    
}
function duplicates (str)
{
    let arr = str.toLowerCase().split("");
    let dubObj= {}
    arr.forEach(element => {
     (dubObj.hasOwnProperty(element))?dubObj[element]++:dubObj[element]=1 ; 
    });
    let filteredObj ={} ; 
    for (const key in dubObj) {
        let tempStr= key ; 
        let count = dubObj[key];
        if (count>1)filteredObj[key]=count;
       
                 
    }
   
    return filteredObj ; 
}
console.log(duplicates (str)) ; 
//Ex 6.1
let str = 'RqaEZt';
function Mumbling (str)
{
    let arr = str.toLowerCase().split("");
    let arr2=[] ;
    for (let i=0; i<arr.length ; i++)
    {
        if(!i) arr2.push(arr[i].toUpperCase()) ; 
        else arr2.push(arr[i].toUpperCase()+""+arr[i].repeat(i));

    }
    return arr2.join("-")
}
console.log(Mumbling(str)); 

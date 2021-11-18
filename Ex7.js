//Ex7
const arr = [1,2,3,'test',true,'the last','school']
const Ready_forEach = arr.forEach(element => {
    console.log(element)
});
const ready_map = arr.map((b)=> b * 2);
console.log(ready_map);

const ready_filter = arr.slice().filter((b)=> typeof b ==='string');
console.log(ready_filter);


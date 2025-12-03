
let a = "age" 
let data = 23 

let obj = { [a]: data  }
// console.log(obj);

let ob = {...obj, [a] :!obj[a]}

console.log(ob,'123');
console.log("hello")
interface SomeVlaue{
name:string
id:number
}
let obj:SomeVlaue={
    name:"kunal",
    id:5
}
console.log(obj)

const someValue = {
  name: "kunal",
  id: 5
};

console.log(someValue.name); // kunal
console.log(someValue)

let awesome:string|boolean|number="shakeandbake"
awesome="something"
awesome=5
awesome="awaming"
awesome=awesome.endsWith("g").toString()
console.log(awesome)


let valuer:number|string=5
valuer=10
valuer+=10
valuer="kunal"
console.log(valuer)

console.log(typeof(valuer))
console.log(Number(valuer))

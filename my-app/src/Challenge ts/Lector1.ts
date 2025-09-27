let value:number=20
if(value>18){
    console.log("hello buddy")
}else{
    console.log("hello brother")
}
value+=50
console.log(value)

let name:string="hello buddy"
name.split("")
name=name.toUpperCase()
console.log(name)

let arr: boolean[] = [true, false];
const random = Math.floor(Math.random() * arr.length); 
const value2 = arr[random];  

if (value2 === true) {
    console.log("go to lunch");
} else {
    console.log("wait some time finish learning");
}


let work:any="kunal"
console.log(work.toUpperCase())
work=10
console.log(work.toString().split())
work=false
console.log(work)

let work2:string|number|string[]="kunal"
console.log(work2.toUpperCase())

work2=["20","40","60"]
if(Array.isArray(work2)){
    console.log(work2.join(",").split(","))
}

let books=["harrypotter","onepunch","pirates","literature"]
let foundbooks:string|undefined;
for(let book of books){
    if(book==="onepunch"){
        foundbooks=book
    }
}
console.log(foundbooks)
console.log(foundbooks?.length)
console.log(foundbooks?.toUpperCase())

let person:"good"|"bad"|"worse"="bad"
person="good"
console.log(person)

const money:number[]=[10,20,30]
money.push(40)
console.log(money)
console.log(money.length)

let price:string[]=["asxs"]
console.log(price)
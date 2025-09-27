function Calculate(a:number,b:number):number{
    return a+b
}
console.log(Calculate(5,5))

function name2(value:string){
    return `hello ${value}`
}
console.log(name2("kunal"))

 

function area(a: number, b: number): number {
  const result = a * b;
  return radius(result);
}

function radius(value: number): number {
  const rad = value; // here we just use area as radius
  return diameter(rad);
}

function diameter(radiusValue: number): number {
  const dia = radiusValue * 2;
  return circumference(dia);
}

function circumference(diameterValue: number): number {
  const circum = Math.PI * diameterValue;
  return circum;
}

const hof = () => {
  return area(50, 50);
};

const obj = hof();
console.log("Final Result:", obj);


const arr = ["kunal", "riku", "subhonil", "kowstav"];

function checkname(value: string | boolean): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true; // ✅ found match
    }
  }
  return false; // ✅ checked all, no match
}

const obj2 = checkname("kunal");
console.log(obj2); // true


const PriceDiscount=(a:number,b?:number):number=>{
return a-(b||0)
}
const discont=PriceDiscount(100,50)
console.log(discont)

const BookDiscount=(a:number,b:number=0)=>{
return a-b
}
const CheckPrice=BookDiscount(100,80)
console.log(CheckPrice);


const Test=(name:string,...number:number[]):string=>{
const mul=number.map((num)=>num*2)
const red=number.reduce((prev,curr)=>prev+curr)
return `${name}=[${mul.join(",")}],sum=${red}`
}
const CheckTest=Test("total value",1,2,3,4,5)
console.log(CheckTest);




const processInput = (name: string, multiply: number): string | number => {
  if (name) {
    // Convert each char of name to uppercase
    return name
      .split("")
      .map((ch) => ch.toUpperCase())
      .join("");
  } else {
    // Double the number
    return multiply * 2;
  }
};

// Example with prompt (browser environment)
// const name = prompt("Enter your name") || "";
// const num = parseInt(prompt("Enter your no") || "0");
// const obj3 = processInput(name, num);

// console.log(obj3);

function createEmployee(id: number): { id: number; isActive: boolean } {
  return { id, isActive: id % 2 === 0 };
}

console.log(createEmployee(1));
console.log(createEmployee(2));

function CreateStudent(Students: { id: number; name: string; college: string }): void {
  console.log(
    `Welcome student details -> ${Students.id} : ${Students.name.toUpperCase()} : ${Students.college.toUpperCase()}`
  );
}

const NewStudents = {
  id: 1,
  name: "kunal das",
  college: "tiu",
   email:"abc@gmail.com"
};

CreateStudent(NewStudents); // ✅ just call, no `new`


function ProcessData(input:string|number,config:{reverse:boolean}={reverse:false}):string|number {
    if(typeof(input)==="number"){
        return input*input
    }else{
      return  config.reverse?input.toUpperCase().split("").reverse().join(""):input.toUpperCase()
    }
}
console.log(ProcessData(10));
console.log(ProcessData("hello"));
console.log(ProcessData("hello",{reverse:true}));

function Test2<ElementType>(Number: number[] | string[]): number | string {
  if (typeof Number[0] === "number") {
    return (Number as number[]).reduce((prev, curr) => prev + curr, 0);
  } else if (typeof Number[0] === "string") {
    return (Number as string[]).join("").toUpperCase();
  }
  return "";
}

const arr5 = [10, 20, 30];
console.log(Test2(arr5)); // 60

const stringArr = ["kunal", "das"];
console.log(Test2(stringArr)); // "KUNALDAS"



function Test3<ElementType>(Number: ElementType[]): number | string {
  if (typeof Number[0] === "number") {
    return (Number as number[]).reduce((prev, curr) => prev + curr, 0);
  } else if (typeof Number[0] === "string") {
    return (Number as string[]).join("").toUpperCase();
  }
  return "";
}

const arr6 = [10, 20, 30,40];
console.log(Test3(arr6)); // 60

const stringArr2 = ["kunal", "das"];
console.log(Test3(stringArr2)); // "KUNALDAS"


type Person<NameType=string, IdType=number, CollegeType=string> = {
  id: IdType;
  name: NameType;
  college: CollegeType;
};

const PersonDetails: Person = {
  id: 1,
  name: "kunal das",
  college: "tiu"
};
console.log(PersonDetails);
const AnotherPerson: Person<string, string, string> = {
  id: "EMP-101",
  name: "Riku",
  college: "IIT"
};
console.log(AnotherPerson);

const NumericPerson: Person<number, number, number> = {
  id: 202,
  name: 12345,
  college: 98765
};
console.log(NumericPerson);

type Theme = "dark" | "light";
let theme: Theme;

function setTheme<T extends Theme>(newTheme: T): void {
  theme = newTheme;
}

setTheme("light");
console.log(theme); // "light"

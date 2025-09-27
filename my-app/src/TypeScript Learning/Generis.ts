let Strarr2: string[] = ["kunal", "das", "riku"];
let numarr2: number[] = [10, 20, 30];
let Bool2: boolean[] = [true, false, true];

type Checking = string[] | number[] | boolean[];

function Check2(value: Checking) {
  if (typeof value[0] === "string") {
    return (value as string[]).map(i => i.toUpperCase().split("").join(""));
  } else if (typeof value[0] === "number") {
    return (value as number[]).reduce((prev, curr) => prev + curr, 0);
  } else {
    return (value as boolean[]).map(prev => !prev);
  }
}

console.log(Check2(Strarr2)); // ["KUNAL", "DAS", "RIKU"]
console.log(Check2(numarr2)); // 60
console.log(Check2(Bool2));   // [false, true, false]



let Strarr = ["kunal", "das", "riku"];
let numArr = [10, 20, 30];
let Bool = [true, false, true];

function Check<T extends string | number | boolean>(value: T[]): any {
  if (typeof value[0] === "string") {
    return (value as string[]).map(i => i.toUpperCase().split("").join(""));
  } else if (typeof value[0] === "number") {
    return (value as number[]).reduce((prev, curr) => prev + curr, 0);
  } else {
    return (value as boolean[]).map(prev => !prev);
  }
}

console.log(Check(Strarr)); // ["KUNAL", "DAS", "RIKU"]
console.log(Check(numArr)); // 60
console.log(Check(Bool));   // [false, true, false]


let test: Array<string> = ["kunal", "das"];

function result<T>(value: T) {
    test.push(value as unknown as string); // cast because test is string[]
    return test; // return the updated array
}

console.log(result("riku")); // ["kunal", "das", "riku"]


function GenraicFunction<t>(value:t):t {
    return value
}
const check=GenraicFunction<string>("hello world")
const check2=GenraicFunction<number>(25)
console.log(check);
console.log(check2);

interface Name<N, C, P> {
    name: N;
    college: C;
    passout: P;
}

function result3<N, C, P>(value: Name<N, C, P>): Name<N, C, P> {
    return value;
}

const fillObject = result3({
    name: "kunal",
    college: "tiu",
    passout: true
});

console.log(fillObject);

async function CheckAsyncFunction(): Promise<string> {
    return "hello kunal";
}

CheckAsyncFunction()
    .then((res) => console.log("done check:", res))
    .catch((err) => console.log("something went wrong:", err));

function GenericPush<T>(length: number, value: T): Array<T> {
    const result: T[] = []
    for (let i = 0; i < length; i++) {
        result.push(value)
    }
    return result
}

const strArr = GenericPush(3, "hello")   // string[]
const numArr3 = GenericPush(4, 42)        // number[]
const boolArr = GenericPush(2, true)     // boolean[]
console.log(strArr);
console.log(numArr3);
console.log(boolArr);


type Students={
  name:string,
  college:string
}
const student:Students={
  name:"kunal",
  college:"tiu"
}
type Products={
  name:string
  product:Array<number>
}
const prodt:Products={
  name:"phillsps",
  product:[20,50,45]
}
function itemsDetails<t extends {name:string}>(params:t):string {
  return params.name
}
console.log(itemsDetails(prodt));
console.log(itemsDetails(student));


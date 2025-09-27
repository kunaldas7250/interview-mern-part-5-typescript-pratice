import { name } from "../Test"
console.log(name(5,10));


enum UserRole{
Manager,
Admin,
Employee
}
type User={
id:number,
name:string,
Role:UserRole
Contact:[string,string]
}

function CreateUser(user:User):User {
    return user
    
}
const newUser:User=CreateUser({
    id:1,
        name:"kunal das",
        Role:UserRole.Manager,
        Contact:["abc@gmail.com","1234567891"]
})
console.log(newUser);

let someValue:any="hello this side kunal das"
let StrLength:number=(someValue as string).length
console.log(StrLength);


type Bird={
    name:string
}

let BirdDetails='{"name":"parrot"}'
let DogDetails='{"breed":"labradog"}'

let BirdObject=JSON.parse(BirdDetails)
let DogObject=JSON.parse(DogDetails)

let Bi=BirdObject as Bird;
let dog=DogObject as Bird;

console.log(Bi);
console.log(dog);

enum Status {
  loading = "loading",
  success = "success",
  error = "error"
}

type User2 = {
  name: string;
  status: Status;
};

const ChangeStatus = "pending";

// type guard to check if value is a valid Status
function isChecking(value: string): value is Status {
  return Object.values(Status).includes(value as Status);
}

let UserStatus: Status;

if (isChecking(ChangeStatus)) {
  UserStatus = ChangeStatus;  // ✅ valid Status
} else {
  UserStatus = Status.error;  // ✅ fallback
}

console.log("Final Status:", UserStatus);

let Check: unknown;

// STRING
Check = "kunal";
console.log(Check); // "kunal"
if (typeof Check === "string") {
  const fixedString = Check.toUpperCase().split("").reverse().join("");
  console.log(`Your string is fixed: ${fixedString}`);
}

// INTEGER
Check = 52;
console.log(Check); // 52
if (typeof Check === "number") {
  const fixedNumber = Check.toFixed(0); // returns string "52"
  console.log(`Number is fixed: ${fixedNumber}`);
}

// FLOAT
Check = 52.256;
console.log(Check); // 52.256
if (typeof Check === "number") {
  const fixedNumber = Check.toFixed(0); // returns string "52"
  console.log(`Number is fixed: ${fixedNumber}`);
}


let check2: unknown;
let values: unknown[] = [["kunal", "das"], 52, 52.214, "hello world"];

for (check2 of values) {
  console.log(`Original value:`, check2);

  if (Array.isArray(check2)) {
    // Convert array elements to uppercase strings
    const arrchecking = check2.map((i) => String(i).toUpperCase());
    console.log("Uppercased Array:", arrchecking);
  } 
  else if (typeof check2 === "number") {
    const fixedInt = check2.toFixed(0);
    const fixedDecimal = check2.toFixed(1);
    console.log(`Integer fixed: ${fixedInt}, Decimal fixed: ${fixedDecimal}`);
  } 
  else if (typeof check2 === "string") {
    const fixedString = check2.toUpperCase().split("").reverse().join("");
    console.log("Fixed string:", fixedString);
  } 
  else {
    console.log("Unknown type, skipping...");
  }

  console.log("---");
}

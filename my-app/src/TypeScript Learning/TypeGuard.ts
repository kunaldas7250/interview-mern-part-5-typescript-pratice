function CheckVlaue(value: string | number | boolean) {
    if (typeof value === "string") {
        return value.toLowerCase().split("").join();
    } else if (typeof value === "number") {
        return value;
    } else {
        return value;
    }
}

console.log(CheckVlaue("KUNAL")); // "k,u,n,a,l"
console.log(CheckVlaue(4010));    // 4010
console.log(CheckVlaue(true));    // true

type Dog = {
    type: "dog"
    name: string
    bark(): void
}

type Cat = {
    type: "cat"
    name: string
    meow(): void
}

const Dogs: Dog = {
    type: "dog",
    name: "german shepherd",
    bark() {
        console.log(`my dog name is buddy, I love my dog`);
    }
}

const Cats: Cat = {
    type: "cat",
    name: "pussy",
    meow() {
        console.log(`i dont have pussy`);
    }
}

type Animal = Dog | Cat;

// function Makesound(value: Animal) {
//     if (value.type === "dog") {
//         value.bark();   // 🐶 call dog's method
//     } else {
//         value.meow();   // 🐱 call cat's method
//     }
// }
function Makesound(value:Animal) {
    if("bark" in value){
        value.bark()
    }
    else{
        value.meow()
    }
}
// Example usage:
Makesound(Dogs); // Output: my dog name is buddy, I love my dog
Makesound(Cats); // Output: i dont have pussy



function PrintLength(str:string|null|undefined) {
    if(str){
        console.log(str.length);
        
    }else{
        console.log(`no str is available`);
        
    }
}
PrintLength("kunal")
PrintLength(null)
PrintLength(" ")
PrintLength(undefined)

function getInputdate(value:Date|string) {
    if(value instanceof Date){
        return new Date().getFullYear()
    }
    return value
}
console.log(getInputdate(new Date())); 
// e.g. 2025 (number)

console.log(getInputdate("2025-09-26")); 
// "2025-09-26" (string)

type Students = {
  name: string;
  Studentsdetails(): void;
};

type Login = {
  name: string;
  login(): void;
};

type Person = Students | Login;

// function that randomly returns either Students or Login
const randomNumberToss = (): Person => {
  const random = Math.random();

  return random > 0.5
    ? {
        name: "kunal das",
        Studentsdetails: () =>
          console.log(
            `my name is kunal das my role is mern stack developer`
          ),
      }
    : {
        name: "riku das",
        login: () =>
          console.log(
            `login details: username: riku, password: ******`
          ),
      };
};

let person: Person = randomNumberToss();

// type narrowing using "in"
if ("Studentsdetails" in person) {
  person.Studentsdetails();
} else {
  person.login();
}

type Incremental = {
    type: "increment"
    user: string,
    timeStamp: number,
    amount: number
}

type Decremental = {
    type: "decrement"
    user: string,
    timeStamp: number,
    amount: number
}

type Action = Incremental | Decremental

function Reducer(state: number, action: Action): number {
    switch (action.type) {
        case "increment":
            return state + action.amount
        case "decrement":
            return state - action.amount
        default:
            return state
    }
}

const newState = Reducer(50, {
    type: "increment",
    user: "kunal das",
    timeStamp: Date.now(),
    amount: 100
})

console.log("Final State:", newState);

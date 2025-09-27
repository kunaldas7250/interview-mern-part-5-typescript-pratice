// Generic type with defaults
type Person<IdType = number, NameType = string, IsActiveType = boolean> = {
  id: IdType;
  name: NameType;
  isActive: IsActiveType;
};

// Generic function to create a Person
function createPerson<IdType, NameType, IsActiveType>(
  id: IdType,
  name: NameType,
  isActive: IsActiveType
): Person<IdType, NameType, IsActiveType> {
  return { id, name, isActive };
}

// Example usage
const p1 = createPerson(1, "John Cena", false);   // { id: 1, name: "John Cena", isActive: false }
console.log(p1);

const p2 = createPerson("EMP-007", "Riku", true); // { id: "EMP-007", name: "Riku", isActive: true }
console.log(p2);



// Generic type alias with defaults
type Person2<IdType = number, NameType = string, IsActiveType = boolean> = {
  id: IdType;
  name: NameType;
  isActive: IsActiveType;
};

// Create a person2 using the alias
const pk1: Person2 = {
  id: 1,
  name: "John Cena",
  isActive: false
};

const pk2: Person2<string, string, boolean> = {
  id: "EMP-007",
  name: "Riku",
  isActive: true
};

console.log(pk1); // { id: 1, name: "John Cena", isActive: false }
console.log(pk2); // { id: "EMP-007", name: "Riku", isActive: true }

// Define a type alias
type StringOrNumber = string | number;

// Use it for a variable
let value: StringOrNumber;

value = "kunal"; // ✅ OK
value = 5;       // ✅ OK

console.log(value); // 5 (last assigned value)



type DarkorLight="dark"|"light"
let Theme:DarkorLight
Theme="dark"
console.log(Theme);

type Employees = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employees[];   // ✅ fixed spelling
};

type Staff = Employees | Manager;

const emp1: Employees = {
  id: 1,
  name: "vaihav",
  department: "sales",
};

const emp2: Employees = {
  id: 2,
  name: "kowtav",
  department: "it",
};

const Director: Manager = {
  id: 1,
  name: "kunal das",
  employees: [emp1, emp2],
};

function Details(staff: Staff): void {
  if ("employees" in staff) {
    console.log(`${staff.name} is a manager of:`);
    staff.employees.forEach((e) => console.log(`- ${e.name}`));
  } else {
    console.log(`${staff.name} is an employee in ${staff.department}`);
  }
}

Details(emp1);
Details(emp2);
Details(Director);


type Books = {
  id: number;
  price: number;
  title: string;
};

// Basic book objects
const Buyers: Books = {
  id: 1,
  price: 20,
  title: "Harry Potter"
};

const Buyers2: Books = {
  id: 2,
  price: 20,
  title: "Pirates"
};

// Book with extra property using intersection type
const Buyers3: Books & { discount: number } = {
  id: 3,
  price: 50,
  title: "Romeo & Juliet",
  discount: 20
};

console.log(Buyers);
console.log(Buyers2);
console.log(Buyers3);

type Car = {
  id: number;
  model: string;
  company: string;
  carspecif: {
    brake: string;
    engine: string;
    topspeed: number;
  };
  carcolor: {
    color: string;
    backcolor: string;
  };
};

// Function to print car details
function carDetails(car: Car): void {
  console.log(`Car: ${car.model} (${car.company})`);
  console.log(`Engine: ${car.carspecif.engine}, Brake: ${car.carspecif.brake}, Top Speed: ${car.carspecif.topspeed}`);
  console.log(`Color: ${car.carcolor.color}, Back Color: ${car.carcolor.backcolor}`);
}

// Example usage
const myCar: Car = {
  id: 1,
  model: "Mustang",
  company: "Ford",
  carspecif: { brake: "ABS", engine: "V8", topspeed: 250 },
  carcolor: { color: "Red", backcolor: "Black" },
};

carDetails(myCar);



type Movies = {
  id: number;
  genre: {
    title: string;
    Director: string;
    TimeStamp: number;
  };
  category: {
    action: string;
    romance: string;
    anime: string;
    comedy: string;
  };
  MovieDetails(): void;
};

const DetailsMovie: Movies = {
  id: 1,
  genre: {
    title: "Inception",
    Director: "Christopher Nolan",
    TimeStamp: 2010,
  },
  category: {
    action: "Yes",
    romance: "Mild",
    anime: "No",
    comedy: "Low",
  },
  MovieDetails() {
    console.log(
      `🎬 ${this.genre.title} directed by ${this.genre.Director}, released in ${this.genre.TimeStamp}`
    );
    console.log("📌 Categories:");
    console.log(`Action: ${this.category.action}`);
    console.log(`Romance: ${this.category.romance}`);
    console.log(`Anime: ${this.category.anime}`);
    console.log(`Comedy: ${this.category.comedy}`);
  },
};

DetailsMovie.MovieDetails();

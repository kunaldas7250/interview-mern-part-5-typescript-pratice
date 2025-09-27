// Define the type
type Brand = {
  car: string;
  company: string;
  year: number;
};

// Create the object
const brand: Brand = {
  car: "Suzuki",
  company: "Maruthi",
  year: 2025
};

console.log(brand);
brand.car="ford"
console.log(brand);


const brand2:Brand={
    car:"bike",
    company:"honda",
    year:2022
}
console.log(brand2);

type iteams = {
 readonly books?: {
   readonly name: string;
   readonly published: boolean;
   readonly author: string;
   readonly year: number;
  };
 readonly pens?: {
  readonly  name: string;
  readonly  company: string;
 readonly   year: number;
  };
 readonly notebooks?: {
  readonly  notetype: string;
  readonly  companyname: string;
  };
};

const arr: iteams[] = [
  {
    books: { name: "TS Guide", published: true, author: "Kunal", year: 2023 }
  },
  {
    pens: { name: "Gel Pen", company: "Cello", year: 2021 }
  },
  {
    notebooks: { notetype: "Ruled", companyname: "Classmate" }
  }
];


console.log(arr);




type iteams2 = {
  books?: {
    name: string;
    published: boolean;
    author: string;
    year: number;
  };
  pens?: {
    name: string;
    company: string;
    year: number;
  };
  notebooks?: {
    notetype: string;
    companyname: string;
  };
};

const arr2:readonly iteams2[] = [
  {
    books: { name: "TS Guide", published: true, author: "Kunal", year: 2023 }
  },
  {
    pens: { name: "Gel Pen", company: "Cello", year: 2021 }
  },
  {
    notebooks: { notetype: "Ruled", companyname: "Classmate" }
  }
];
arr2[0].books!.name="react js"
if(arr2[0].books){
    arr2[0].books.name="javascript"
}
console.log(arr2);


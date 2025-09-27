type iteams = {
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

type person = {
  name: string;
  age: number;
  role?: string;
};

// Array that can contain both types
const arr: (iteams | person)[] = [
  {
    books: {
      name: "JS Guide",
      published: true,
      author: "Kunal Das",
      year: 2025,
    },
  },
  {
    pens: {
      name: "Spark",
      company: "Kunal Company",
      year: 2025,
    },
  },
  {
    notebooks: {
      notetype: "Ruled",
      companyname: "Kunal Ltd Pvt",
    },
  },
  {
    name: "Kunal Das",
    age: 25,
    role: "Developer",
  },
];



console.log(arr);

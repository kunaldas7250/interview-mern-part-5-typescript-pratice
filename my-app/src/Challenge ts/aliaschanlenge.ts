interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgrade: (increase: number) => number;
}

const laptop: Computer = {
  id: 1,
  brand: "hp",
  ram: 8,
  storage: 512,
  upgrade(increase: number) {
    this.ram += increase;
    return this.ram;
  }
};

// Example usage
console.log(laptop.upgrade(4)); // Output: 12


interface DogOwnwer {
    id?: number
    dogname?: string
    owner?: string
}

interface Person {
    id: number
    fullname?: string,
    latname?: string
    location?: string
}
const dogOwner: DogOwnwer = {
    id: 1,
    dogname: "Bruno",
    owner: "John Doe"
}

// Example Person
const person: Person = {
    id: 1,
    fullname: "John",
    latname: "Doe",
    location: "New York"
}
const dogPerson = {
    id: 1,
    dogname: "Bruno",
    owner: "John Doe",
    fullname: "John",
    latname: "Doe",
    location: "New York"
};
const PersonDetails = <T extends DogOwnwer & Person>(person: T): string => {
    return `he is ${person.fullname.concat(" ", person.latname)} lives in ${person.location.toUpperCase()} he is ${person.owner}  owner of this ${person.dogname} dog`;
}

console.log(PersonDetails(dogPerson));

interface Pet {
  petname: string;
}

interface Person2 extends Pet {
  fullname: string;
}

interface Manager extends Person2 {
  Managername: string;
  ManagePeople(): string;
  DeleteProfile(): string;
}

// Function returning random type
function getDetails(): Pet | Person2 | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      petname: "Buddy"
    };
  } else if (random < 0.66) {
    return {
      petname: "Buddy",
      fullname: "Kunal Das"
    };
  } else {
    return {
      petname: "Buddy",
      fullname: "Riku Das",
      Managername: "Riku Manager",
      ManagePeople() {
        return `Hello Manager: ${this.Managername}`;
      },
      DeleteProfile() {
        return `Delete this name: ${this.Managername}`;
      }
    };
  }
}

const employee: Pet | Person2 | Manager = getDetails();
console.log(employee);

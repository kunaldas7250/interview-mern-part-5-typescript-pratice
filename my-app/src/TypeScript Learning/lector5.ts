const tuple:[string,string,number]=["kunaj","das",56]
console.log(tuple);
const tuple2:(string|number)[]=["kunal",56,"das"]
console.log(tuple2);
const tuple3:[string,number]=[25,"das"]
console.log(tuple3);
console.log(typeof(tuple3[0]));
console.log(typeof(tuple3[1]));

enum ServerResponceStatus {
    success = "success",
    error = "error",
    loading = "loading"
}


interface ServerResponce {
    result: ServerResponceStatus
    data: (number | string)[]
}

function getServerResponce(Serverdata: ServerResponce): ServerResponce {
    return {
        data: ["kunal", 25, "das"],
        result: ServerResponceStatus.success
    }
}

console.log(getServerResponce({
    data: [],
    result: ServerResponceStatus.loading
}));


enum NumericValue{
    Member=1
}
enum StringValue{
    Member="value"
}
const valueCheck:NumericValue=NumericValue.Member
console.log(valueCheck);
const StringValueCheck:StringValue=StringValue.Member
console.log(StringValueCheck);


enum NumericTEST {
  Member = 1
}

enum StringValueCheck2 {
  Member = "value"
}

// Union types to allow flexibility
type FlexChange = NumericTEST | string;
type FlexChange2 = StringValueCheck2 | number;

// Correct assignments
const check: NumericTEST = NumericTEST.Member;  // ✅ only enum member
const check2: FlexChange = "kunal";            // ✅ enum member or string
const check3: StringValueCheck2 = StringValueCheck2.Member; // ✅ only enum member
const check4: FlexChange2 = 42;                // ✅ enum member or number

console.log(check);   // 1
console.log(check2);  // "kunal"
console.log(check3);  // "value"
console.log(check4);  // 42




type Bird = {
  name: string;
};

function isBird(obj: any): obj is Bird {
  return typeof obj === "object" && obj !== null && "name" in obj;
}

let BirdDetails = '{"name":"parrot"}';
let DogDetails = '{"breed":"labradog"}';

let BirdObject = JSON.parse(BirdDetails);
let DogObject = JSON.parse(DogDetails);

if (isBird(BirdObject)) {
  console.log("✅ Bird:", BirdObject);
} else {
  console.error("❌ Not a Bird:", BirdObject);
}

if (isBird(DogObject)) {
  console.log("✅ Bird:", DogObject);
} else {
  console.error("❌ Not a Bird:", DogObject);
}

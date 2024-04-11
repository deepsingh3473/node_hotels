const jsonString = '{"name" : "deep", "age" : 24, "city" : "Ludhiana"}';
const jsonObj = JSON.parse(jsonString); //JS Object
console.log(jsonObj);

const obj = {
    name: "Deep Singh",
    age : 24
}
const jsonS = JSON.stringify(obj); //JSON string
console.log(jsonS);
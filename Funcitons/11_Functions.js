let argument1 = 8;
let argument2 = 2;
function functionName(parameter1, parameter2) {
  console.log(parameter1 + parameter2);
}
functionName(argument1, argument2);

function add(num1, num2) {
  return num1 + num2;
}
let result = add(1, 2);
console.log(result);

function loginUsername(username) {
  return `${username} has logged in`;
}
console.log(loginUsername("tun"));

//arrow function
let add4 = (a, b) => a + b;
console.log(add4(3, 2));

// Function Expression
const add2 = function (a, b) {
  console.log(a + b);
};
add2(2, 3);

//declaration
function add3(a, b) {
  console.log(a + b);
}
add3(2, 3);

console.log("test");

let GOOGLE_URL = "https://jsonplaceholder.typicode.com/users/1";
let functions_response = fetch(GOOGLE_URL);

console.log(functions_response);

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response);
    console.log("json: ", response.json);
    return response.json();
  })
  .then((parameter) => {
    console.log(parameter);
    return parameter.name;
  })
  .then((name) => console.log(name));
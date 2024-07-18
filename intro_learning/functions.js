"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginUser = function (username, password, isPaid) {
    if (isPaid === void 0) { isPaid = true || false; }
    console.log("username:".concat(username, " password:").concat(password));
};
LoginUser('isaac', 'pas*89s', true);
// explicit return value 
var handleNum = function (number) {
    // return 'name' returns error
    return number; // return value should be number
};
// console.log(handleNum('isaac'))  returns error
console.log(handleNum(2424));
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
;
// const user  = {age:'isaac', isPaid:false} returns error as name key is missing 
var user = { name: 'isaac', isPaid: false };
createUser(user);
// declare person object
var person = { firstname: 'isaac', lastname: 'kyalo' };
function userWithReturnValue(_a) {
    // function takes an object with 2 keys firstname, lastname 
    // the object keys should be of type string
    // function returns an object with a key fullname of type string
    var firstname = _a.firstname, lastname = _a.lastname;
    var fullname = "".concat(firstname, " ").concat(lastname);
    return { fullname: fullname };
}
;
console.log(userWithReturnValue(person));
// in pure JS it would be 
// this function destructure firstname & lastname from an object that has been passed 
// returns a on object with key fullname of type string
// the problem is they are not explicit but implicit returns
var returnUser = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    return { fullname: "".concat(firstname, " ").concat(lastname) };
};
console.log(returnUser(person));
// N.B If I redeclared a person object with two keys; age & loggedIn and passed them 
// to the two functions above, the TypeScript func would return a syntax error while 
// the JS  func would execute but return a return time error in the browser
// with typescript static type checking ensures such errors are handled before production
var userFunc = function (_a) {
    var age = _a.age;
    return age.toString();
};
console.log(userFunc({ age: 3 }));
var myVehicle = function (_a) {
    var name = _a.name, fullname = _a.fullname, year = _a.year;
    return "Vehicle ".concat(name, " registered under ").concat(fullname, " was bought on ").concat(year.toLocaleDateString());
};
var vehicle = {
    name: 'Mark X',
    fullname: "Isaac Kyalo",
    year: new Date('2024-07-12'),
};
console.log(myVehicle(vehicle));

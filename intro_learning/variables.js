"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Isaac";
greetings = "isaac";
// greetings = 1242; typescript return error intellisence
console.log(greetings);
// number
var userId = 22;
console.log(userId);
// number.toLowerCase() does not exist in number
// boolean
var loggedIn = false;
console.log(loggedIn);
// Inferences
var token_uuid = 2342424.234; // too redundant at times
console.log(token_uuid.toFixed());
// let hero; of type any
var hero;
var getHero = function () {
    // return true return an error
    return "hero";
};
hero = getHero();

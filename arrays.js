"use strict";
exports.__esModule = true;
// Arrays in TS
var superHeros = [];
// const heroPower: number[] = []; alternative definition
var heroPower = [];
// superHeros.push(2) cannot push a nuber
superHeros.push("spiderman");
heroPower.push(2);
for (var i = 0; i < superHeros.length; i++) {
    console.log(superHeros[i], heroPower[i]);
}
// declare an array whose elements are of type user, an object
var allUsers = [];
// delcare user 1
var user1 = { id: 1234, username: 'isaachalo', loggedIn: false };
// push a user of type User to array allUsers that only accepts an element of type User
allUsers.push(user1);
// color 1 of type RGBA
var color_1 = [255, 255, 255, 255];
// model of type array 
var MLModels = [];
MLModels.push(color_1);
// console.log users
console.log(allUsers);
console.log(MLModels);

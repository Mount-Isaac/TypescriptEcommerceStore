"use strict";
// combination of 2 or ... types of data 
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
var Isaac = {
    name: 'isaachalo',
    id: 241424,
    role: 'writer'
};
console.log(Isaac);
// pass an id as a string or number
var getIdDb = function (id) {
    console.log("The id is ".concat(id));
};
console.log(getIdDb(33));
console.log(getIdDb("33"));
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3"];
var data2 = [1, 2, 3, 4];
// :number[] | :string[] either all elements should be a number or string no mix match
// const data3 :number [] | string [] = [1,2,"3", 4] results to error 
// data4 can has a mix of strings & numbers at the same time during declaration / assigning
var data4 = [1, "2", 3, 4];
// beats the logic of type check & strict by using any
var data5 = [1, "2", 3, 4];

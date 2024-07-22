var myVehicle = function (_a) {
    var name = _a.name, fullname = _a.fullname, year = _a.year;
    return "Vehicle ".concat(name, " registered under ").concat(fullname, " was bought on ").concat(year.toLocaleDateString());
};
var vehicle = {
    name: 'Mark X',
    fullname: "Isaac Kyalo",
    year: new Date('2024-07-12')
};
var createUser = function (user) {
    return { name: "", email: "", isActive: false };
};
// takes a user and returns a user
console.log(createUser({ name: 'isaac', email: 'email', isActive: false }));
var newPost = {
    title: "Isaac Equity Bank",
    age: 22,
    balance: 300.22
};
console.log(newPost);
var add = function (x, y) { return (x + y); };
var subtract = function (x, y) { return (x - y); };
var x = 12;
var y = 8;
console.log(add(x, y));
console.log(subtract(x, y));
// declare a user of type admin 
var admin = {
    id: 12342,
    username: 'isaac',
    email: 'isa@isa.com',
    role: 'admin'
};
console.log(admin);

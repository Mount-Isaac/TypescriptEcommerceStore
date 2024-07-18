var myVehicle = function (_a) {
    var name = _a.name, fullname = _a.fullname, year = _a.year;
    return "Vehicle ".concat(name, " registered under ").concat(fullname, " was bought on ").concat(year.toLocaleDateString());
};
var vehicle = {
    name: 'Mark X',
    fullname: "Isaac Kyalo",
    year: new Date('2024-07-12'),
};
// only an object with 3 vars can be passed and with the strict type 
// and only if the func returns a string as required
// Otherwise with TS violating this rule, returns an error 
console.log(myVehicle(vehicle));
var createUser = function (user) {
    return { name: "", email: "", isActive: false };
};
// takes a user and returns a user
console.log(createUser({ name: 'isaac', email: 'email', isActive: false }));

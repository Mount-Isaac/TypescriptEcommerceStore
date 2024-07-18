const myVehicle = ({name,fullname,year}:{name:string, fullname:string, year:Date}) :string => {
    return `Vehicle ${name} registered under ${fullname} was bought on ${year.toLocaleDateString()}`
}
const vehicle = {
    name:'Mark X',
    fullname: "Isaac Kyalo",
    year: new Date('2024-07-12'),
}
// only an object with 3 vars can be passed and with the strict type 
// and only if the func returns a string as required
// Otherwise with TS violating this rule, returns an error 
console.log(myVehicle(vehicle))


// functions that takes a user and returns only a user 
type User = {
    name:string,
    email:string,
    isActive:boolean
}

const createUser = function (user:User): User {
    return {name:"", email:"", isActive:false}
}
// takes a user and returns a user
console.log(createUser({name:'isaac', email:'email', isActive:false}))
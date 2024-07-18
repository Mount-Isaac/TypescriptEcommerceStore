const LoginUser = (username: string, password:string, isPaid: boolean = true || false) => {
        console.log(`username:${username} password:${password}`)
    }

LoginUser('isaac', 'pas*89s', true)


// explicit return value 
let handleNum = (number: number) : number => {
    // return 'name' returns error
    return number // return value should be number
}

// console.log(handleNum('isaac'))  returns error
console.log(handleNum(2424))

function createUser({name:string, isPaid:boolean}){};
// const user  = {age:'isaac', isPaid:false} returns error as name key is missing 
let user = {name:'isaac', isPaid:false}
createUser(user);

// declare person object
let person = {firstname:'isaac', lastname:'kyalo'}

function userWithReturnValue ({firstname, lastname}: {firstname:string, lastname:string }):{fullname:string}{
    // function takes an object with 2 keys firstname, lastname 
    // the object keys should be of type string
    // function returns an object with a key fullname of type string

    const fullname =  `${firstname} ${lastname}`;
    return {fullname:fullname}
};
console.log(userWithReturnValue(person));


// in pure JS it would be 
// this function destructure firstname & lastname from an object that has been passed 
// returns a on object with key fullname of type string
// the problem is they are not explicit but implicit returns
const returnUser = ({firstname, lastname}) => {return {fullname:`${firstname} ${lastname}`} } 
console.log(returnUser(person));

// N.B If I redeclared a person object with two keys; age & loggedIn and passed them 
// to the two functions above, the TypeScript func would return a syntax error while 
// the JS  func would execute but return a return time error in the browser
// with typescript static type checking ensures such errors are handled before production


const userFunc = function({age}:{age:number}):string{return age.toString()}
console.log(userFunc({age:3}));

export {}
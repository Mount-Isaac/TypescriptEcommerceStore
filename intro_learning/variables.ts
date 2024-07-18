let greetings: string = "Hello Isaac";

greetings = "isaac";
// greetings = 1242; typescript return error intellisence
console.log(greetings);

// number
let userId:number = 22;
console.log(userId)
// number.toLowerCase() does not exist in number

// boolean
let loggedIn:boolean = false;
console.log(loggedIn);

// Inferences
let token_uuid = 2342424.234; // too redundant at times
console.log(token_uuid.toFixed())

// let hero; of type any
let hero:string;
const getHero = () => {
    // return true return an error
    return "hero"
}

hero = getHero()

export {}
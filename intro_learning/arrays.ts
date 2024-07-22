// Arrays in TS
const superHeros: string[] = [];

// const heroPower: number[] = []; alternative definition
const heroPower: Array<number> = []

// superHeros.push(2) cannot push a nuber
superHeros.push("spiderman")
heroPower.push(2)
for(let i=0; i<superHeros.length; i++){
    console.log(superHeros[i], heroPower[i])
}

// declare a user with id, username and logged in status 
type User = {
    id: number,
    username: string,
    loggedIn: boolean,
}

// declare an array whose elements are of type user, an object
const allUsers : User[] = []

// delcare user 1
const user1: User = {id:1234, username:'isaachalo', loggedIn:false}

// push a user of type User to array allUsers that only accepts an element of type User
allUsers.push(user1)

// create an array of type number whose elements are arrays of type numbers
type RGBA = [number, number, number, number]

// color 1 of type RGBA
const color_1:RGBA = [255, 255, 255, 255]

type modelColors = RGBA[];

// model of type array 
let MLModels : modelColors = []

MLModels.push(color_1)


// console.log users
console.log(allUsers);
console.log(MLModels)




export {}
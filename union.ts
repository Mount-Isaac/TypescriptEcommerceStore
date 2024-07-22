// combination of 2 or ... types of data 

let score : number | string = 33
score = 44;
score = "55"

type User = {
    name: string, 
    id: number,
}

type AdminUser = User & {
    role: string,
}

let Isaac: AdminUser | User = {
    name: 'isaachalo',
    id: 241424,
    role: 'writer'
}

console.log(Isaac)


// pass an id as a string or number
const getIdDb = (id: number | string) => {
    console.log(`The id is ${id}`)
}

console.log(getIdDb(33))
console.log(getIdDb("33"))

const data :number [] = [1,2,3, 4]
const data1 :string [] = ["1","2","3"]
const data2 :number [] | string [] = [1,2,3, 4]
// :number[] | :string[] either all elements should be a number or string no mix match
// const data3 :number [] | string [] = [1,2,"3", 4] results to error 

// data4 can has a mix of strings & numbers at the same time during declaration / assigning
const data4: (number|string) []= [1,"2",3, 4]

// beats the logic of type check & strict by using any
const data5: any []= [1,"2",3, 4]



export {}
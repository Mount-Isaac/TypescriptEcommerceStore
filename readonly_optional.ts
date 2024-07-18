// number
type cardNumber = {
    card_number: string,
}
// date
type cardDate = {
    card_date: string
}

// extend card
type cardDetails = cardNumber & cardDate &{
    cvv: number
}
type User = {
    readonly _id: string,
    name: string,
    email: string, 
    creditCard?: cardDetails, // optional
}

let user : User = {
    _id: "1234",
    name: "isaac",
    email: "is@is.com",
    creditCard: {card_number:'123434', card_date:'1/1/2222', cvv:234}
}

console.log(user?.creditCard?.card_number && user.creditCard)


user.email = "34@gmail.com"
// user._id = "q2343" You cannot edit/update this
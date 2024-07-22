var _a;
var user = {
    _id: "1234",
    name: "isaac",
    email: "is@is.com",
    creditCard: { card_number: '123434', card_date: '1/1/2222', cvv: 234 }
};
console.log(((_a = user === null || user === void 0 ? void 0 : user.creditCard) === null || _a === void 0 ? void 0 : _a.card_number) && user.creditCard);
user.email = "34@gmail.com";
// user._id = "q2343" You cannot edit/update this

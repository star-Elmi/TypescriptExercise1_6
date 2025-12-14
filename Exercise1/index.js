var product = "Book";
var price = 29.99;
var discount = 0.1;
console.log("Product:", product);
console.log("Price:", price);
console.log("Its availaible Discount:", discount);
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log("Final Price:", getDiscount(price, discount));
function printLength(x) {
    if (typeof x === "string" || Array.isArray(x)) {
        console.log(x.length);
    }
}

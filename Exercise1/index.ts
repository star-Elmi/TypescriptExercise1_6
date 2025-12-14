let product :string = "Book";
let price :number = 29.99;
let discount :number = 0.1;

console.log("Product:", product);
console.log("Price:", price);
console.log("Its availaible Discount:", discount);

function getDiscount(price :number, discount : number) :number {
  return price - price * discount;
}
console.log("Final Price:", getDiscount(price, discount));

function printLength(x: unknown) {

    if (typeof x === "string" || Array.isArray(x)) {
  console.log(x.length);
}}




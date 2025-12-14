function input(iput) {
    return iput;
}
var x = input("Hello World");
var y = input(42);
var z = input(true);
var apiResponse = {
    status: "success",
    data: ["item1", "item2", "item3"]
};
var apiResponse2 = {
    status: "success",
    data: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
    ]
};
console.log(x);
console.log(y);

function login(user) {
    return "User ".concat(user.name, " with ID ").concat(user.id, " has logged in.");
}
console.log(login({ id: 1, name: "Istar", password: "securePass", email: "istar@gmail.com" }));

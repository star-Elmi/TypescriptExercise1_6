function fullname(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log(fullname("Istar", "Mohamed"));
function registerUser(username, isAdmin, languange) {
    if (isAdmin === void 0) { isAdmin = false; }
    if (languange === void 0) { languange = "eng"; }
    if (isAdmin) {
        return "Admin User: ".concat(username, ", Language: ").concat(languange);
    }
    return "Regular User: ".concat(username, ", Language: ").concat(languange);
}
console.log(registerUser("istar", true));

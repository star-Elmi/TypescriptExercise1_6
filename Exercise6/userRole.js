var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["VIEWER"] = "VIEWER";
    UserRole["EDITOR"] = "EDITOR";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}
console.log("Can ADMIN edit?", canEdit(UserRole.ADMIN)); // true
console.log("Can VIEWER edit?", canEdit(UserRole.VIEWER));
var button = document.querySelector("button");
button.disabled = true;

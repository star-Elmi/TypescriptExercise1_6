enum UserRole{
    ADMIN = "ADMIN",
    VIEWER = "VIEWER",
    EDITOR = "EDITOR"
}

function canEdit(role: UserRole): boolean {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}
console.log("Can ADMIN edit?", canEdit(UserRole.ADMIN)); // true
console.log("Can VIEWER edit?", canEdit(UserRole.VIEWER));

const button = document.querySelector("button") as HTMLButtonElement;
 button.disabled = true;
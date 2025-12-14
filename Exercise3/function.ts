function fullname(firstname: string, lastname: string): string {
  return firstname + " " + lastname;
}

console.log(fullname("Istar", "Mohamed"));

function registerUser(
  username: string,
  isAdmin: boolean = false,
  languange: string = "eng"
): string {
  if (isAdmin) {
    return `Admin User: ${username}, Language: ${languange}`;
  }
  return `Regular User: ${username}, Language: ${languange}`;
}

console.log(registerUser("istar", true, "Somali"));

interface user{
    id: number;
    name: string;
    email?: string;
    password: string;
}

function login(user: user): string {
    return `User ${user.name} with ID ${user.id} has logged in.`;
}
console.log(login({id: 1, name: "Istar", password: "securePass" , email : "istar@gmail.com"}));

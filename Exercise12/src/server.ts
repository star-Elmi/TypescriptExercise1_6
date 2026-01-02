import express from "express";

import { getAllUsers, userlogin, userRegister } from "./controller/userlogin.controller.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", getAllUsers);
app.use("/register",  userRegister);
app.use("/login", userlogin);
app.use("/userby/:id", userlogin);

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});

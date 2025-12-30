import express from "express";
import sayGoodbyRoute from "./routes/sayGooby.route.js";

const app = express();

// Middleware muhiim ah
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", sayGoodbyRoute);

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});

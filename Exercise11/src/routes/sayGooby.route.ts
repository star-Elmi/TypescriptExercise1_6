import { Router } from "express";
import { sayGoodby } from "../controllers/sayGoodby.controllers.js";

const router = Router();

router.get("/sayGoodby", sayGoodby);

export default router;

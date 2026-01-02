import { Router } from "express";
import { userlogin, userRegister } from "../controller/userlogin.controller";
import { Request , Response } from "express";


const router = Router();

type Params = {
    id? : string
}

type Body = { name: string };
router.get("/users", (req: Request, res: Response) => {
    res.send("List of users");
});

router.post("/register", userRegister);

router.post("/login", userlogin);

router.put("/users/:id", (req: Request<Params, {}, Body>, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  res.send(`Updated user ${id} with name ${name}`);
});

router.get("/userby/:id", (req :Request<Params>, res : Response)=>{
    const {id} = req.params;
    if (id){
        return res.status(200).json({message : `User with id ${id} found`});
    }
    return res.status(200).json({message : "All users"});
});

// router.put("/userupdate", userlogin);


export default router;

import { Request , Response } from "express";
import { createLogin } from "../types/login";



export const  userlogin = (req : Request <{},{},createLogin>, res : Response)=>{
    const {email , password} = req.body;

    if (email ===" " || password ===" "){
        return res.status(400).json({message : "Email and password are required"});
    }

    return res.status(200).json({message : "Login successful"});




}


    // create user register
 export const userRegister = (req : Request <{},{},createLogin>, res : Response)=>{
        const {email , password} = req.body;    
        if (email ===" " || password ===" "){
            return res.status(400).json({message : "Email and password are required"});
        }
        return res.status(201).json({message : "User registered successfully"});
    }

    // get all users
    export const getAllUsers = (req : Request<{}, createLogin>, res : Response)=>{
        // const {email , password} = req.body;
        // if(email || password){
        //     return res.status(400).json({message : "No need to send email and password"});

        // }

        return res.status(200).json({message : {createlogin : "List of all users"}});
        // if (req.params.id){
        //     return res.status(200).json({message : `User with id ${req.params.id} found`});
        // }

        // return res.status(200).json({message : "All users"});
    }


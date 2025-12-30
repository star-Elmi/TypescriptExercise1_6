import type { Request, Response } from "express";

export const sayGoodby = (req: Request, res: Response) => {
  const name = "istar liin"; 

  return res.status(200).json({
    sayGoodby: `Goodbye, ${name}!`,
  });
};

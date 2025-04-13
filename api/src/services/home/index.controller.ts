import { Request, Response } from "express";

export function welcome(req: Request, res: Response): void {
    res.json({ message: "Hello!" });
}
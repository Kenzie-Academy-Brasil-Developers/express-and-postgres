import { Request, Response, NextFunction } from "express";

export const validation =
   (validations: any) => (req: Request, res: Response, next: NextFunction) => {
      const errors: string[] = [];

      Object.entries(validations).forEach((validation) => {
         const [key, value] = validation;
         if (value === "required") {
            if (!req.body[key]) errors.push(`${key} is required`);
         }
      });

      if (errors.length > 0) {
         return res.status(422).json({ errors });
      }

      return next();
   };

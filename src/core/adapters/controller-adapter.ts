import { NextFunction, Request, Response } from "express";
import { Controller } from "../../presentation/protocols/controller";


export const controllerAdapter = (controller: Controller) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const response = await controller.handle(req, next);

            return res.status(response?.statusCode!).json(response?.data)

        } catch (e) {
            return res.status(400).json({
                'message': "failed"
            })
        }

    }
}
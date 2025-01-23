import { Request, Response, NextFunction } from "express"
import { ApiError } from "./ApiError";
import jwt from "jsonwebtoken";

interface JwTPayload {
    id: number
}
export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(404, "Page not found"));
}

export const errorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({
        message: err.message,
        success: false
    })
    return
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token || req.headers["authorization"];

        if (!token) {
            next(new ApiError(403, "No Token found"));
            return;
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as JwTPayload;

        if (!decodedToken) {
            next(new ApiError(403, "Invalid Request"));
            return;
        }

        const { id } = decodedToken;

        req.userId = id;
        next();

    } catch (error) {

    }
}
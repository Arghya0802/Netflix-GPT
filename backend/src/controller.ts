import { Request, Response, NextFunction } from "express";
import { ApiError } from "./ApiError";
import { SignInFormSchema, SignUpFormSchema } from "./UserZodSchema";
import prisma from "./lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { success, error } = SignUpFormSchema.safeParse(req.body);

        if (!success) {
            next(new ApiError(411, error.issues[0].message))
            return;
        }

        const { name, email, password } = req.body;

        const existedUser = await prisma.user.findFirst({ where: { email } });

        if (existedUser) {
            next(new ApiError(401, "User already exists"))
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        if (!hashedPassword) {
            next(new ApiError());
            return
        }

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }, select: { name: true, email: true }
        })

        // console.log(newUser);

        if (!newUser) {
            next(new ApiError());
            return;
        }

        res.status(201).json({
            newUser,
            message: "User signedUp successfully!",
            success: true
        })
    } catch (error) {
        console.log(error);
        next(new ApiError())
    }
}

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { success, error } = SignInFormSchema.safeParse(req.body);

        if (!success) {
            next(new ApiError(411, error.issues[0].message))
            return;
        }

        const { email, password } = req.body;

        const checkUser = await prisma.user.findFirst({ where: { email } })

        if (!checkUser) {
            next(new ApiError(404, "No User found with given Email-Id"))
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(password, checkUser.password);

        if (!isPasswordCorrect) {
            next(new ApiError(403, "Incorrect Password"));
            return;
        }

        const token = jwt.sign({ id: checkUser.id }, JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true
        });

        res.status(200).json({
            token,
            name: checkUser.name,
            email: checkUser.email,
            message: "User signedIn successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        next(new ApiError())
        return;
    }
}

export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.userId;
        const user = await prisma.user.findUnique({ where: { id }, select: { name: true, email: true } })

        if (!user) {
            next(new ApiError(404, "No User found with given Id"));
            return;
        }

        res.status(200).json({
            user,
            message: "User details fetched successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        next(new ApiError());
        return;
    }
}
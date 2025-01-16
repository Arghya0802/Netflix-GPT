import { z } from "zod"

export const SignInFormSchema = z.object({
    email: z.string({ message: "Please enter a valid email Id" }).email({ message: "Please enter a valid email Id" }),
    password: z.string({ message: "Please enter a valid password" }).max(20, { message: "Max Length of Password is 20 characters" }).min(8, { message: "Minimum Length of Password is 8 characters" }).regex(/[a-z]/, { message: "Password must have atleast one SmallCase Letter" }).regex(/[A-Z]/, { message: "Password must have atleast one CapitalCase Letter" }).regex(/[0-9]/, { message: "Password must have atleast one Digit (0-9)" }).regex(/[!@#$%*&?]/, { message: "Password must have atleast One Special Character from (!@#$%&*?)" })
})

export const SignUpFormSchema = z.object({
    email: z.string({ message: "Please enter a valid email Id" }).email({ message: "Please enter a valid email Id" }),
    password: z.string({ message: "Please enter a valid password" }).max(20, { message: "Max Length of Password is 20 characters" }).min(8, { message: "Minimum Length of Password is 8 characters" }).regex(/[a-z]/, { message: "Password must have atleast one SmallCase Letter" }).regex(/[A-Z]/, { message: "Password must have atleast one CapitalCase Letter" }).regex(/[0-9]/, { message: "Password must have atleast one Digit (0-9)" }).regex(/[!@#$%*&?]/, { message: "Password must have atleast One Special Character from (!@#$%&*?)" }),
    name: z.string().min(3, { message: "Name should have atleast 3 characters" }).max(30, { message: "Name should have maximum 30 characters" })
})
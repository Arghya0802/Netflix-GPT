import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorMiddleware, notFoundMiddleware } from "./middlewares";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.listen(3000, () => {
    console.log("App is listening at Port 3000");
})


import userRouter from "./routes"
app.use("/api/v1/user", userRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

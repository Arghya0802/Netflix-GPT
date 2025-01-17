import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorMiddleware, notFoundMiddleware } from "./middlewares";

const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.listen(3000, () => {
    console.log("App is listening at Port 3000");
})


import userRouter from "./user.routes"
app.use("/api/v1/user", userRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

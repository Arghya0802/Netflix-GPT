import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log("App is listening at Port 3000");
})

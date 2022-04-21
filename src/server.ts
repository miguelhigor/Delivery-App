import express from "express";
import dotenv from "dotenv";
import "express-async-errors";

import { routes } from "./routes";
import { errorHandling } from "./middleware/errorHandling";

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandling);

app.listen(port, () => console.log(`Server is running on port ${port}...`));
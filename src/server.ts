import express from "express";
import dotenv from "dotenv";

import { routes } from "./routes";

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}...`));
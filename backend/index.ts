import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

config();

const create = require("./routes/create");
const retrieve = require("./routes/retrieve");
const update = require("./routes/update");
const app: Application = express()
app.use(express.json());
app.use(cors({ origin: '*'}))
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
app.post("/signup", create.signup);
app.post("/create_card", create.createCard);
app.patch("/update_card/:id", update.updateCard);

app.post("/login", retrieve.login);
app.get("/get_all_cards/:id", retrieve.allCards);


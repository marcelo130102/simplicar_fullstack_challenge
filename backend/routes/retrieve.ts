import { Request, Response } from "express";
import { comparePassword, hashPassword } from "../utils/passwordUtils";
import { prisma } from "../prismaClient";

exports.login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body)
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.json({ ok: false, message: "Not find" });
  } else {
    const auth = await comparePassword(password, user.password);
    auth
      ? res.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } })
      : res.json({ ok: false, Message: "Incorrect password" });
  }
};

exports.allCards = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("get")
  const cards = await prisma.card.findMany({
    where: {
      authorId: id
    },
  });
  if(!cards){
    res.json({"ok": false, "message": "Nor found"})
  }
  else{
    res.json(cards);
  }
};

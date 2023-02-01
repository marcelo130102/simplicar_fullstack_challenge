import { Request, Response } from "express";
import { hashPassword } from "../utils/passwordUtils";
import { prisma } from "../prismaClient";

exports.signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
  res.json({ ok: true, user: { name: user.name, email: user.email } });
};

exports.createCard = async (req: Request, res: Response) => {
  const { name, description, authorEmail } = req.body;
  const card = await prisma.card.create({
    data: {
      name: name,
      description: description,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(card);
};

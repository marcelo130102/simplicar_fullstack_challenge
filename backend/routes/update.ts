import { Request, Response } from "express";
import { prisma } from "../prismaClient";

exports.updateCard = async (req: Request, res: Response) => {
  const { status } = req.body;
  const { id } = req.params;
  const card = await prisma.card.update({
    where: {
      id: id,
    },
    data:{
        status: status
    }
  });
  res.json(card);
};
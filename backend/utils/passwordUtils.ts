import { compare, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashed: string = await hash(password, 10);
  return hashed;
};

export const comparePassword = async (password: string, hash: string) => {
  const result: boolean = await compare(password, hash);
  return result;
};

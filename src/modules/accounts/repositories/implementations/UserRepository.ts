import { ICreateUserDto } from "@modules/accounts/dtos/ICreateUserDto";
import { User } from "@modules/accounts/models/User";
import { IUserRepository } from "../IUserRepository";
import { prismaClient } from "database";

class UserRepository implements IUserRepository {
  constructor() {}
  async create({
    email,
    lastname,
    name,
    password,
    sex,
  }: ICreateUserDto): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        email,
        lastname,
        name,
        password,
        sex,
      },
    });
    return user;
  }
  async findById(id: number): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { id },
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { email },
    });
  }
  async save(user: User): Promise<User> {
    const id = user.id;
    return await prismaClient.user.update({
      where: { id },
      data: {
        email: user.email,
        lastname: user.lastname,
        name: user.name,
      },
    });
  }
}

export { UserRepository };

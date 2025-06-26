import { ICreateUserDto } from "@modules/accounts/dtos/ICreateUserDto";
import { User } from "@modules/accounts/models/User";
import { IUserRepository } from "../IUserRepository";
import { prismaClient } from "database";

class UserRepository implements IUserRepository {
  constructor() {}
  async searchName(name: string): Promise<User[]> {
    return await prismaClient.user.findMany({
      where: {
        name: { search: "*" + name + "*" },
      },
      include: { Profile: true },
    });
  }
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
  async findById(id: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { id },
      include: {
        Profile: true,
        followers: true,
      },
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

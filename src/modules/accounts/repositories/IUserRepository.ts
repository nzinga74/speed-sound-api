import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { User } from "../models/User";

interface IUserRepository {
  create(userData: ICreateUserDto): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  searchName(name: string): Promise<User[]>;
  save(user: User): Promise<User>;
}

export { IUserRepository };

import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { User } from "../models/User";

interface IUserRepository {
  create(userData: ICreateUserDto): Promise<User>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>;
}

export { IUserRepository };

import { inject, injectable } from "tsyringe";
import * as bcrypt from "bcryptjs";
import { ICreateUserDto } from "@modules/accounts/dtos/ICreateUserDto";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { User } from "@modules/accounts/models/User";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreateUserUseCase {
  constructor(
    //@ts-ignore
    @inject("UserRepository")
    private userRepository: IUserRepository,
    //@ts-ignore
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}
  async execute({
    email,
    lastname,
    name,
    password,
    county,
    district,
    province,
    residenceNumber,
    street,
  }: ICreateUserDto): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error(ErrorConstants.EMAIL_ALREADY_EXISTS);
    }
    try {
      const passwordHash = await this.hashProvider.hash(password, 10);
      const user = await this.userRepository.create({
        email,
        lastname,
        password: passwordHash,
        name,
        county,
        district,
        province,
        residenceNumber,
        street,
      });

      return user;
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_USER_ERROR);
    }
  }
}

export { CreateUserUseCase };

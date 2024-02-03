import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import * as bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import tokenConfig from "@config/jstoken";
import { User } from "@modules/accounts/models/User";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { ITokenProvider } from "@shared/providers/TokenProvider/ITokenProvider";
import { ErrorConstants } from "@errors/ErrorConstants";

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    email: string;
    name: string;
  };
  token: string;
}

@injectable()
class AuthenticateUseCase {
  constructor(
    //@ts-ignore
    @inject("UserRepository")
    private userRepository: IUserRepository,
    //@ts-ignore
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    //@ts-ignore
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (user == null) {
      throw new Error(ErrorConstants.EMAIL_OR_PASSWORD_NOT_EXISTS);
    }
    const validatedPassword = await this.hashProvider.compare(
      password,
      user.password
    );
    if (!validatedPassword) {
      throw new Error(ErrorConstants.EMAIL_OR_PASSWORD_NOT_EXISTS);
    }

    const token = this.tokenProvider.sign(user.id);
    const response = {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };

    return response;
  }
}

export { AuthenticateUseCase };

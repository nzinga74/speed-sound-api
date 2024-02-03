import { ErrorConstants } from "@errors/ErrorConstants";
import { IClientRepository } from "@modules/accounts/repositories/IClientRepository";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { ITokenProvider } from "@shared/providers/TokenProvider/ITokenProvider";
import { inject, injectable } from "tsyringe";

@injectable()
class AuthenticateClientUseCase {
  constructor(
    //@ts-ignore
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    //@ts-ignore
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    //@ts-ignore
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ) {}
  async execute(email: string, password: string) {
    const client = await this.clientRepository.findByEmail(email);
    if (client == null) {
      throw new Error(ErrorConstants.EMAIL_OR_PASSWORD_NOT_EXISTS);
    }
    const isValidPassword = await this.hashProvider.compare(
      password,
      client.password
    );
    if (!isValidPassword) {
      throw new Error(ErrorConstants.EMAIL_OR_PASSWORD_NOT_EXISTS);
    }
    const token = this.tokenProvider.sign(client.id);
    return {
      user: {
        token,
        email,
        id: client.id,
      },
    };
  }
}

export { AuthenticateClientUseCase };

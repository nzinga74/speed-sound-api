import { ErrorConstants } from "@errors/ErrorConstants";
import { IClientRepositoryDTO } from "@modules/accounts/dtos/IClientRepositoryDTO";
import { Client } from "@modules/accounts/models/Client";
import { IClientRepository } from "@modules/accounts/repositories/IClientRepository";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { inject, injectable } from "tsyringe";
@injectable()
class CreateClientUseCase {
  constructor(
    //@ts-ignore
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    //@ts-ignore
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute({
    email,
    password,
    name,
    lastname,
    county,
    district,
    phone,
    province,
    residenceNumber,
    street,
  }: IClientRepositoryDTO): Promise<Client> {
    const client = await this.clientRepository.findByEmail(email);
    if (client != null) {
      throw new Error(ErrorConstants.EMAIL_ALREADY_EXISTS);
    }
    const passwordHash = await this.hashProvider.hash(password, 10);
    try {
      return await this.clientRepository.create({
        email,
        password: passwordHash,
        name,
        lastname,
        county,
        district,
        phone,
        province,
        residenceNumber,
        street,
      });
    } catch {
      throw new Error(ErrorConstants.CREATE_CLIENT_ERROR);
    }
  }
}

export { CreateClientUseCase };

import { IClientRepositoryDTO } from "../dtos/IClientRepositoryDTO";
import { Client } from "../models/Client";
interface IClientRepository {
  create(data: IClientRepositoryDTO): Promise<Client>;
  findByEmail(email: string): Promise<Client | null>;
}

export { IClientRepository };

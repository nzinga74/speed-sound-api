import { ICreateContractDTO } from "../dtos/ICreateContractDTO";
import { IFilterContract } from "../dtos/IFilterContractDTO";
import { Contract } from "../models/Contract";

interface IContractRepository {
  create({
    clientId,
    description,
    propertyId,
    transactionDate,
    transaction_price,
  }: ICreateContractDTO): Promise<Contract>;
  findContractSameClientProperty(
    clientId: number,
    propertyId: number
  ): Promise<Contract | null>;
  findContracts(filter: IFilterContract): Promise<Contract[] | null>;
}
export { IContractRepository };

import { ICreateContractDTO } from "@modules/contracts/dtos/ICreateContractDTO";
import { Contract } from "@modules/contracts/models/Contract";
import { IContractRepository } from "../IContractRepository";
import { prismaClient } from "database";
import { IFilterContract } from "@modules/contracts/dtos/IFilterContractDTO";

class ContractRepository implements IContractRepository {
  findContracts(filter: IFilterContract): Promise<Contract[] | null> {
    return prismaClient.contract.findMany({
      where: { ...filter },
    });
  }
  async findContractSameClientProperty(
    clientId: number,
    propertyId: number
  ): Promise<Contract | null> {
    return await prismaClient.contract.findFirst({
      where: { clientId, propertyId },
    });
  }
  create({
    clientId,
    description,
    propertyId,
    transactionDate,
    transaction_price,
    userId,
  }: ICreateContractDTO): Promise<Contract> {
    return prismaClient.contract.create({
      data: {
        clientId,
        description,
        propertyId,
        transaction_price,
        transactionDate,
        userId,
      },
    });
  }
}
export { ContractRepository };

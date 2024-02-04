import { injectable, inject } from "tsyringe";
import { ICreateContractDTO } from "../dtos/ICreateContractDTO";
import { IContractRepository } from "../repositories/IContractRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreateContractUseCase {
  constructor(
    //@ts-ignore
    @inject("ContractRepository")
    private contractRepository: IContractRepository
  ) {}
  async execute({
    clientId,
    description,
    propertyId,
    transactionDate,
    transaction_price,
    userId,
  }: ICreateContractDTO) {
    const contractSameClientProperty =
      await this.contractRepository.findContractSameClientProperty(
        clientId,
        propertyId
      );

    if (contractSameClientProperty != null) {
      throw new Error(ErrorConstants.CREATE_CONTRACT_WITH_SAME_CLIENT_PROPERTY);
    }
    try {
      const contract = this.contractRepository.create({
        clientId,
        description,
        propertyId,
        transaction_price,
        transactionDate,
        userId,
      });
      return contract;
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_CONTRACT_ERROR);
    }
  }
}
export { CreateContractUseCase };

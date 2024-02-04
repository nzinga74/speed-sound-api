import { injectable, inject } from "tsyringe";
import { IContractRepository } from "../repositories/IContractRepository";
import { IFilterContract } from "../dtos/IFilterContractDTO";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class ListContractUseCase {
  constructor(
    //@ts-ignore
    @inject("ContractRepository")
    private contractRepository: IContractRepository
  ) {}
  async execute(filter: IFilterContract) {
    try {
      const contracts = await this.contractRepository.findContracts(filter);
      return contracts;
    } catch (error) {
      throw new Error(ErrorConstants.LIST_CONTRACT_ERROR);
    }
  }
}

export { ListContractUseCase };

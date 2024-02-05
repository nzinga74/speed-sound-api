import { ErrorConstants } from "@errors/ErrorConstants";
import { IFilterReserveDTO } from "../dtos/IFilterReserveDTO";
import { IReserveRepository } from "../repositories/IReserveRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class ListReservesUseCase {
  constructor(
    //@ts-ignore
    @inject("ReserveRepository")
    private reserveRepository: IReserveRepository
  ) {}
  async execute(filter: IFilterReserveDTO) {
    try {
      const reserves = await this.reserveRepository.findReserves(filter);
      return reserves;
    } catch (error) {
      throw new Error(ErrorConstants.LIST_RESERVE_ERROR);
    }
  }
}
export { ListReservesUseCase };

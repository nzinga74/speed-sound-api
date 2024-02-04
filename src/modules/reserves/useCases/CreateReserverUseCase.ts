import { injectable, inject } from "tsyringe";
import { ICreateReserveDTO } from "../dtos/ICreateReserveDTO";
import { IReserveRepository } from "../repositories/IReserveRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreateReserveUseCase {
  constructor(
    //@ts-ignore
    @inject("ReserveRepository")
    private reserveRepository: IReserveRepository
  ) {}
  async execute({
    clientId,
    estimatedDate,
    isActived,
    propertyId,
    userId,
  }: ICreateReserveDTO) {
    try {
      const clientReserveSameProperty =
        await this.reserveRepository.findReserveWithClientAndProperty(
          clientId,
          propertyId
        );
      if (clientReserveSameProperty != null) {
        throw new Error(
          ErrorConstants.CREATE_RESERVE_WITH_SAME_CLIENT_PROPERTY
        );
      }
      const reserve = await this.reserveRepository.create({
        clientId,
        estimatedDate,
        isActived,
        propertyId,
        userId,
      });
      return reserve;
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_RESERVE_ERROR);
    }
  }
}
export { CreateReserveUseCase };

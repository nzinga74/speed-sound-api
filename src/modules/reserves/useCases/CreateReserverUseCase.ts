import { injectable } from "tsyringe";
import { ICreateReserveDTO } from "../dtos/ICreateReserveDTO";
import { IReserveRepository } from "../repositories/IReserveRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreateReserveUseCase {
  constructor(
    //@ts-ignore
    @inject("PropertyTypeRepository")
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
        this.reserveRepository.findReserveWithClientAndProperty(
          clientId,
          propertyId
        );
      if (clientReserveSameProperty == null) {
        throw new Error(
          ErrorConstants.CREATE_RESERVE_WITH_SAME_CLIENT_PROPERTY
        );
      }
      const reserve = this.reserveRepository.create({
        clientId,
        estimatedDate,
        isActived: true,
        propertyId,
        userId,
      });
    } catch (error) {}
  }
}
export { CreateReserveUseCase };

import { ICreateReserveDTO } from "../dtos/ICreateReserveDTO";
import { Reserve } from "../models/Reserve";

interface IReserveRepository {
  create({
    clientId,
    isActived,
    propertyId,
    userId,
  }: ICreateReserveDTO): Promise<Reserve>;
  findReserveWithClientAndProperty(
    clientId: number,
    propertyId: number
  ): Promise<Reserve | null>;
}
export { IReserveRepository };

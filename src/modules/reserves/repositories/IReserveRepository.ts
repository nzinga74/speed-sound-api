import { ICreateReserveDTO } from "../dtos/ICreateReserveDTO";
import { IFilterReserveDTO } from "../dtos/IFilterReserveDTO";
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

  findReserves(filter: IFilterReserveDTO): Promise<Reserve[] | null>;
}
export { IReserveRepository };

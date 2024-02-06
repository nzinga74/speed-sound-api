import { ICreateReserveDTO } from "@modules/reserves/dtos/ICreateReserveDTO";
import { Reserve } from "@modules/reserves/models/Reserve";
import { IReserveRepository } from "../IReserveRepository";
import { prismaClient } from "database";
import { IFilterReserveDTO } from "@modules/reserves/dtos/IFilterReserveDTO";

class ReserveRepository implements IReserveRepository {
  async findReserves(filter: IFilterReserveDTO): Promise<Reserve[] | null> {
    return await prismaClient.reserve.findMany({
      where: { ...filter },
      include: {
        property: {
          include: {
            PropertyImages: true,
          },
        },
      },
    });
  }
  async findReserveWithClientAndProperty(
    clientId: number,
    propertyId: number
  ): Promise<Reserve | null> {
    return await prismaClient.reserve.findFirst({
      where: { clientId, propertyId },
    });
  }
  async create({
    clientId,
    isActived,
    propertyId,
    userId,
    estimatedDate,
  }: ICreateReserveDTO): Promise<Reserve> {
    const reserve = await prismaClient.reserve.create({
      data: {
        clientId,
        isActived,
        propertyId,
        userId,
        estimatedDate,
      },
    });
    return reserve;
  }
}
export { ReserveRepository };

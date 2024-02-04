import { ICreateReserveDTO } from "@modules/reserves/dtos/ICreateReserveDTO";
import { Reserve } from "@modules/reserves/models/Reserve";
import { IReserveRepository } from "../IReserveRepository";
import { prismaClient } from "database";

class ReserveRepository implements IReserveRepository {
  findReserveWithClientAndProperty(
    clientId: number,
    propertyId: number
  ): Promise<Reserve | null> {
    return prismaClient.reserve.findFirst({
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

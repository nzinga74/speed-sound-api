import { ICreatePropertyDTO } from "@modules/property/dtos/ICreatePropertyDTO";
import { Property } from "@modules/property/models/Property";
import { IPropertyRepository } from "../IPropertyRepository";
import { prismaClient } from "database";
import { IFilterPropertyDTO } from "@modules/property/dtos/IFilterPropertyDTO";
import { Prisma } from "@prisma/client";

class PropertyRepository implements IPropertyRepository {
  findById(id: number): Promise<Property | null> {
    return prismaClient.property.findUnique({
      where: { id },
      include: {
        address: true,
        PropertyImages: true,
        user: true,
        propertyType: true,
      },
    });
  }
  findByUserId(userId: number): Promise<Property[] | null> {
    return prismaClient.property.findMany({
      where: { userId },
    });
  }
  findActivates(filter: IFilterPropertyDTO): Promise<Property[] | null> {
    const currentDate = new Date();
    //
    let sql = Prisma.sql`select  * from properties p right join  property_images pm ON pm.propertyId = p.id where p.isActived = true and p.id not in (select propertyId from maintenances m where m.propertyId = p.id and m.closingDate > ${currentDate})`;
    if (filter.userId) {
      //sql += ` and userId=${filter.userId}`;
      sql = Prisma.sql`${sql} and userId=${filter.userId}`;
    }
    if (filter.propertyTypeId) {
      //sql += ` and propertyTypeId=${filter.propertyTypeId}`;
      sql = Prisma.sql`${sql} and propertyTypeId=${filter.propertyTypeId}`;
    }
    if (filter.maxPrice && filter.minPrice) {
      //sql += ` and price >= ${filter.minPrice} and price <= ${filter.maxPrice} `;
      sql = Prisma.sql`${sql} and price >= ${filter.minPrice} and price <= ${filter.maxPrice} `;
    }

    return prismaClient.$queryRaw`${sql}`;
  }
  async create({
    county,
    description,
    district,
    lease,
    name,
    numberOfBedrooms,
    price,
    propertyTypeId,
    province,
    residenceNumber,
    street,
    images,
    userId,
  }: ICreatePropertyDTO): Promise<Property> {
    const address = await prismaClient.propertyAddress.create({
      data: {
        province,
        county,
        district,
        street,
        residenceNumber: parseInt(residenceNumber.toString()),
      },
    });

    const property = await prismaClient.property.create({
      data: {
        description,
        name,
        numberOfBedrooms: parseInt(numberOfBedrooms.toString()),
        price: parseFloat(price.toString()),
        addressId: address.id,
        propertyTypeId: parseInt(propertyTypeId.toString()),
        userId: parseInt(userId.toString()),
        lease,
        PropertyImages: {
          createMany: {
            data: images,
          },
        },
      },
    });

    return property;
  }
}
export { PropertyRepository };

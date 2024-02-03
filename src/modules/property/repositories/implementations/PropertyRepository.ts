import { ICreatePropertyDTO } from "@modules/property/dtos/ICreatePropertyDTO";
import { Property } from "@modules/property/models/Property";
import { IPropertyRepository } from "../IPropertyRepository";
import { prismaClient } from "database";

class PropertyRepository implements IPropertyRepository {
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
    console.log("Here!!!", province);
    const address = await prismaClient.propertyAddress.create({
      data: {
        province,
        county,
        district,
        street,
        residenceNumber,
      },
    });
    console.log("Here!!!", address);

    const property = await prismaClient.property.create({
      data: {
        description,
        name,
        numberOfBedrooms,
        price,
        addressId: address.id,
        propertyTypeId,
        userId,
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

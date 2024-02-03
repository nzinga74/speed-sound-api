import { PropertyType } from "@modules/property/models/PropertyType";
import { IPropertyTypeRepository } from "../IPropertyTypeRepository";
import { prismaClient } from "database";

class PropertyTypeRepository implements IPropertyTypeRepository {
  async create(type: string): Promise<PropertyType> {
    return prismaClient.propertyType.create({
      data: {
        type,
      },
    });
  }
  async findAll(): Promise<PropertyType[]> {
    return await prismaClient.propertyType.findMany();
  }
}
export { PropertyTypeRepository };

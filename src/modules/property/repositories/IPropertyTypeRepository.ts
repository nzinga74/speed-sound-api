import { PropertyType } from "../models/PropertyType";

interface IPropertyTypeRepository {
  create(type: string): Promise<PropertyType>;
  findAll(): Promise<PropertyType[]>;
}
export { IPropertyTypeRepository };

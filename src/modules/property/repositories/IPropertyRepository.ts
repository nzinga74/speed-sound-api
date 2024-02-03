import { ICreatePropertyDTO } from "../dtos/ICreatePropertyDTO";
import { Property } from "../models/Property";

interface IPropertyRepository {
  create(data: ICreatePropertyDTO): Promise<Property>;
}
export { IPropertyRepository };

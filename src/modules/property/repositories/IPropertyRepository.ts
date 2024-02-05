import { ICreatePropertyDTO } from "../dtos/ICreatePropertyDTO";
import { IFilterPropertyDTO } from "../dtos/IFilterPropertyDTO";
import { Property } from "../models/Property";

interface IPropertyRepository {
  create(data: ICreatePropertyDTO): Promise<Property>;
  findByUserId(userId: number): Promise<Property[] | null>;
  findById(id: number): Promise<Property | null>;
  findActivates(filter: IFilterPropertyDTO): Promise<Property[] | null>;
}
export { IPropertyRepository };

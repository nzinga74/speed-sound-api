import { inject, injectable } from "tsyringe";
import { PropertyType } from "../models/PropertyType";
import { IPropertyTypeRepository } from "../repositories/IPropertyTypeRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreatePropertyTypeUseCase {
  constructor(
    //@ts-ignore
    @inject("PropertyTypeRepository")
    private propertyRepository: IPropertyTypeRepository
  ) {}
  async execute(type: string): Promise<PropertyType> {
    try {
      const propertyType = await this.propertyRepository.create(type);
      return propertyType;
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_PROPERTY_TYPER_ERROR);
    }
  }
}
export { CreatePropertyTypeUseCase };

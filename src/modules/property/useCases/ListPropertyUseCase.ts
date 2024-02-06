import { ErrorConstants } from "@errors/ErrorConstants";
import { IFilterPropertyDTO } from "../dtos/IFilterPropertyDTO";
import { IPropertyRepository } from "../repositories/IPropertyRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListPropertyUseCase {
  constructor(
    //@ts-ignore
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}

  async findFilteredProperty(filter: IFilterPropertyDTO) {
    try {
      const properties = this.propertyRepository.findActivates(filter);
      return properties;
    } catch (error) {
      throw new Error(ErrorConstants.LIST_PROPERTY_ERROR);
    }
  }
}

export { ListPropertyUseCase };

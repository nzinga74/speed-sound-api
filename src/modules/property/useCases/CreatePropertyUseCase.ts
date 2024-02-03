import { inject, injectable } from "tsyringe";
import { ICreatePropertyDTO } from "../dtos/ICreatePropertyDTO";
import { IPropertyRepository } from "../repositories/IPropertyRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreatePropertyUseCase {
  constructor(
    //@ts-ignore
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}
  async execute(propertyData: ICreatePropertyDTO) {
    const property = await this.propertyRepository.create(propertyData);
    return property;
  }
}
export { CreatePropertyUseCase };

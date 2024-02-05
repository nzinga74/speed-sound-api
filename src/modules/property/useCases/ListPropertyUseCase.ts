import { IPropertyRepository } from "../repositories/IPropertyRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListPropertyUseCase {
  constructor(
    //@ts-ignore
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}
}

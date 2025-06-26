import { IRadioRepository } from "@modules/radios/repositories/IRadioRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class ListCountryRadioUseCase {
  constructor(
    //@ts-ignore
    @inject("RadioRepository")
    private radioRepository: IRadioRepository
  ) {}
  async execute() {
    return this.radioRepository.getAvaliableCountries();
  }
}

export { ListCountryRadioUseCase };

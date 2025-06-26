import { IRadioRepository } from "@modules/radios/repositories/IRadioRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class ListStationRadioByCountryUseCase {
  constructor(
    //@ts-ignore
    @inject("RadioRepository")
    private radioRepository: IRadioRepository
  ) {}
  async execute(countryName: string) {
    const stations = await this.radioRepository.getStationRadioByCountry(
      countryName
    );
    return stations.slice(0, 30);
  }
}

export { ListStationRadioByCountryUseCase };

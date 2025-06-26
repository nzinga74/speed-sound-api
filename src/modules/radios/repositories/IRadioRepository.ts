import { RadioCountry } from "../models/RadioCountry";
import { RadioStation } from "../models/RadioStation";

interface IRadioRepository {
  getAvaliableCountries(): Promise<RadioCountry[]>;
  getStationRadioByCountry(countryName: string): Promise<RadioStation[]>;
}

export { IRadioRepository };

import { RadioCountry } from "@modules/radios/models/RadioCountry";
import { IRadioRepository } from "../IRadioRepository";
import axios from "axios";
import { RadioStation } from "@modules/radios/models/RadioStation";

class RadioRepository implements IRadioRepository {
  private readonly API_URL = "https://de1.api.radio-browser.info/json";
  private readonly api = axios.create({
    baseURL: this.API_URL,
  });
  async getAvaliableCountries(): Promise<RadioCountry[]> {
    const response = await this.api.get("/countries");
    return response.data;
  }
  async getStationRadioByCountry(countryName: string): Promise<RadioStation[]> {
    const response = await this.api.get(`/stations/bycountry/${countryName}`);
    return response.data;
  }
}

export { RadioRepository };

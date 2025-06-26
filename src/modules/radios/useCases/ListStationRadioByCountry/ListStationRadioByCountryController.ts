import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStationRadioByCountryUseCase } from "./ListStationRadioByCountryUseCase";
import { ErrorConstants } from "@errors/ErrorConstants";

class ListStationRadioByCountryController {
  async handle(request: Request, response: Response) {
    try {
      const { countryName } = request.params;
      const listStationRadioByCountryUseCase = container.resolve(
        ListStationRadioByCountryUseCase
      );
      const stations = await listStationRadioByCountryUseCase.execute(
        countryName
      );
      return response.status(200).json({
        data: stations,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: ErrorConstants.RADIO_STATION_COUNTRY_LIST_ERROR,
      });
    }
  }
}
export { ListStationRadioByCountryController };

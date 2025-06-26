import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCountryRadioUseCase } from "./ListCountryRadioUseCase";
import { ErrorConstants } from "@errors/ErrorConstants";
class ListCountryRadioController {
  async handle(request: Request, response: Response) {
    try {
      const listRadioCountryUseCase = container.resolve(
        ListCountryRadioUseCase
      );
      const radioCountries = await listRadioCountryUseCase.execute();
      return response.status(200).json({
        data: radioCountries,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: ErrorConstants.RADIO_COUNTRY_LIST_ERROR,
      });
    }
  }
}

export { ListCountryRadioController };

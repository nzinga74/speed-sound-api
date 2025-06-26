import { ListCountryRadioController } from "@modules/radios/useCases/ListCountryRadio/ListCountryRadioController";
import { ListStationRadioByCountryController } from "@modules/radios/useCases/ListStationRadioByCountry/ListStationRadioByCountryController";
import { Router } from "express";

const radioRoutes = Router();
const listCountryRadioController = new ListCountryRadioController();
const listStationRadioByCountryController =
  new ListStationRadioByCountryController();
radioRoutes.get("/countries", listCountryRadioController.handle);
radioRoutes.get(
  "/stations/:countryName",
  listStationRadioByCountryController.handle
);

export { radioRoutes };

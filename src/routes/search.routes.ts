import { SearchController } from "@modules/search/useCases/search/SearchController";
import { Router } from "express";

const searchRoutes = Router();
const searchController = new SearchController();
searchRoutes.post("/", searchController.handle);
export { searchRoutes };

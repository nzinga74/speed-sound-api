import { CreateReserveController } from "@modules/reserves/useCases/CreateReserveController";
import { Router } from "express";

const reserveRoutes = Router();
const createReserveController = new CreateReserveController();
reserveRoutes.post("/", createReserveController.handle);
export { reserveRoutes };

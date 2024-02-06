import { CreateReserveController } from "@modules/reserves/useCases/CreateReserveController";
import { ListReservesController } from "@modules/reserves/useCases/ListReservesController";
import { Router } from "express";

const reserveRoutes = Router();
const createReserveController = new CreateReserveController();
const listReserveController = new ListReservesController();
reserveRoutes.post("/", createReserveController.handle);
reserveRoutes.get("/", listReserveController.handle);
export { reserveRoutes };

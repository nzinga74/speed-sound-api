import { CreateEmployeeController } from "@modules/maintenance/useCases/CreateEmployeeController";
import { Router } from "express";

const maintenanceRoute = Router();
const createEmployeeController = new CreateEmployeeController();
maintenanceRoute.post("/employee", createEmployeeController.handle);
export { maintenanceRoute };

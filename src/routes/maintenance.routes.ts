import { CreateEmployeeController } from "@modules/maintenance/useCases/CreateEmployeeController";
import { CreateMaintenanceController } from "@modules/maintenance/useCases/CreateMaintenanceController";
import { ListMaintenanceController } from "@modules/maintenance/useCases/ListMaintenanceController";
import { Router } from "express";

const maintenanceRoute = Router();
const createEmployeeController = new CreateEmployeeController();
const createMaintenanceController = new CreateMaintenanceController();
const listMaintenanceController = new ListMaintenanceController();
maintenanceRoute.post("/", createMaintenanceController.handle);
maintenanceRoute.get("/", listMaintenanceController.handle);
maintenanceRoute.post("/employee", createEmployeeController.handle);
export { maintenanceRoute };

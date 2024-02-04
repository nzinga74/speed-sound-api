import { CreateContractController } from "@modules/contracts/useCases/CreateContractController";
import { Router } from "express";

const contractRoutes = Router();
const createContractController = new CreateContractController();
contractRoutes.post("/", createContractController.handle);
export { contractRoutes };

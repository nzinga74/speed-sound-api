import { CreateContractController } from "@modules/contracts/useCases/CreateContractController";
import { ListContractController } from "@modules/contracts/useCases/ListContractController";
import { Router } from "express";

const contractRoutes = Router();
const createContractController = new CreateContractController();
const listContractController = new ListContractController();
contractRoutes.post("/", createContractController.handle);
contractRoutes.get("/all", listContractController.handle);
export { contractRoutes };

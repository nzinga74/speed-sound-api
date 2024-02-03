import { CreateClientController } from "@modules/accounts/useCases/CreateClient/CreateClientController";
import { Router } from "express";

const clientRoutes = Router();
const createClientController = new CreateClientController();
clientRoutes.post("/", createClientController.handle);

export { clientRoutes };

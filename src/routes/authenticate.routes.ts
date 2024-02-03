import { AuthenticateClientController } from "@modules/accounts/useCases/AuthenticateClient/AuthenticateClientController";
import { AuthenticateController } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateController";
import { Router } from "express";

const authenticateRoutes = Router();
const authenticateController = new AuthenticateController();
const authenticateClientController = new AuthenticateClientController();
authenticateRoutes.post("/user", authenticateController.handle);
authenticateRoutes.post("/client", authenticateClientController.handle);

export { authenticateRoutes };

import { AuthenticateController } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateController";
import { Router } from "express";

const authenticateRoutes = Router();
const authenticateController = new AuthenticateController();
authenticateRoutes.post("/user", authenticateController.handle);

export { authenticateRoutes };

import { CreatePropertyTypeController } from "@modules/property/useCases/CreatePropertyTypeController";
import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";
import { CreatePropertyController } from "@modules/property/useCases/CreatePropertyController";

const propertyRouter = Router();
const uploadFiles = multer(uploadConfig.upload("tmp/"));
const createPropertyTypeController = new CreatePropertyTypeController();
const createPropertyController = new CreatePropertyController();
propertyRouter.post("/property-type", createPropertyTypeController.handle);
propertyRouter.post(
  "/",
  uploadFiles.array("image", 4),
  createPropertyController.handle
);
export { propertyRouter };

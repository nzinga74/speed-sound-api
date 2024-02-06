import { CreatePropertyTypeController } from "@modules/property/useCases/CreatePropertyTypeController";
import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";
import { CreatePropertyController } from "@modules/property/useCases/CreatePropertyController";
import { ListPropertyController } from "@modules/property/useCases/ListPropertyController";

const propertyRouter = Router();
const uploadFiles = multer(uploadConfig.upload("tmp/"));
const createPropertyTypeController = new CreatePropertyTypeController();
const createPropertyController = new CreatePropertyController();
const listPropertyController = new ListPropertyController();
propertyRouter.post("/property-type", createPropertyTypeController.handle);
propertyRouter.post(
  "/",
  uploadFiles.array("image", 4),
  createPropertyController.handle
);

propertyRouter.get(
  "/actives",
  listPropertyController.handleFilterPropertyActived
);
propertyRouter.get("/:id", listPropertyController.handleFindProperty);
export { propertyRouter };

import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";
import { PropertyImages } from "../models/PropertyImages";
import { ErrorConstants } from "@errors/ErrorConstants";

class CreatePropertyController {
  async handle(request: Request, response: Response) {
    try {
      const {
        name,
        userId,
        description,
        numberOfBedrooms,
        lease,
        price,
        propertyTypeId,
        province,
        county,
        street,
        district,
        residenceNumber,
      } = request.body;
      let images: PropertyImages[] = [];
      if (request.files) {
        const files = request.files as Express.Multer.File[];
        images = files.map((f) => {
          const propertyImage = new PropertyImages();
          propertyImage.image = f.filename;
          return propertyImage;
        });
      }
  
      const createPropertyUseCase = container.resolve(CreatePropertyUseCase);
      const property = await createPropertyUseCase.execute({
        county,
        description,
        district,
        userId,
        name,
        lease,
        price,
        numberOfBedrooms,
        propertyTypeId,
        province,
        residenceNumber,
        street,
        images,
      });
      
  
      return response.status(200).json({ data: property });
    }
    catch(error) {
      //@ts-ignore
      return response.status(400).json({message: error.message})
    }
  }
}
export { CreatePropertyController };

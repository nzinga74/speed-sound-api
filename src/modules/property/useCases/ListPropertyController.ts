import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPropertyUseCase } from "./ListPropertyUseCase";
import { IFilterPropertyDTO } from "../dtos/IFilterPropertyDTO";

class ListPropertyController {
  async handleFilterPropertyActived(request: Request, response: Response) {
    try {
      const { minPrice, maxPrice, propertyTypeId, userId } = request.query;
      const filter: IFilterPropertyDTO = {};
      if (minPrice) {
        const newMinPrice = parseFloat(minPrice as string);
        filter.minPrice = newMinPrice;
      }
      if (maxPrice) {
        const newMaxprice = parseFloat(maxPrice as string);
        filter.maxPrice = newMaxprice;
      }
      if (propertyTypeId) {
        const newPropertyId = parseInt(propertyTypeId as string);
        filter.propertyTypeId = newPropertyId;
      }
      if (userId) {
        const newUserId = parseInt(userId as string);
        filter.userId = newUserId;
      }
      const listPropertyUseCase = container.resolve(ListPropertyUseCase);
      const properties = await listPropertyUseCase.findFilteredProperty(filter);
      return response.json({ data: properties });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { ListPropertyController };

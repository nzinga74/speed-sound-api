import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchUseCase } from "./SearchUseCase";

class SearchController {
  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const searchUseCase = container.resolve(SearchUseCase);
      const searchResults = await searchUseCase.execute(name);
      return response.status(200).json({
        data: searchResults,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}
export { SearchController };

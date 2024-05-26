import { AlbumCategory } from "@modules/album/models/AlbumCategory";
import { IAlbumCategoryRepository } from "../IAlbumCategoryRepository";
import { prismaClient } from "database";
import { ICreateAlbumCategoryDTO } from "@modules/album/dtos/ICreateAlbumCategoryDTO";

class AlbumCategoryRepository implements IAlbumCategoryRepository {
  async create({ name }: ICreateAlbumCategoryDTO): Promise<AlbumCategory> {
    const albumCategory = await prismaClient.category.create({
      data: {
        name,
      },
    });
    return albumCategory;
  }
}
export { AlbumCategoryRepository };

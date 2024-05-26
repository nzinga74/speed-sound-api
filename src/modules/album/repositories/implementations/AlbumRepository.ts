import { Album } from "@modules/album/models/Album";
import { IAlbumRepository } from "../IAlbumRepository";
import { ICreateAlbumDTO } from "@modules/album/dtos/ICreateAlbumDTO";
import { prismaClient } from "database";

class AlbumRepository implements IAlbumRepository {
  async createAlbum({
    categoryId,
    cover,
    description,
    title,
    userId,
  }: ICreateAlbumDTO): Promise<Album> {
    const album = await prismaClient.album.create({
      data: {
        cover,
        categoryId,
        description,
        title,
        userId,
      },
    });
    return album;
  }
  listRecentAlbum(): Promise<Album[]> {
    throw new Error("Method not implemented.");
  }
}
export { AlbumRepository };

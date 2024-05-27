import { ICreateAlbumViewsDTO } from "@modules/album/dtos/ICreateAlbumViewsDTO";
import { IFindAlbumViewsByUserAndAlbumDTO } from "@modules/album/dtos/IFindAlbumViewsByUserAndAlbumDTO";
import { AlbumView } from "@modules/album/models/AlbumView";
import { IAlbumViewsRepository } from "../IAlbumViewsRepository";
import { prismaClient } from "database";

class AlbumViewsRepository implements IAlbumViewsRepository {
  async create({ albumId, userId }: ICreateAlbumViewsDTO): Promise<AlbumView> {
    return await prismaClient.albumViews.create({
      data: {
        albumId,
        userId,
      },
    });
  }
  async findByUserAndAlbum({
    albumId,
    userId,
  }: IFindAlbumViewsByUserAndAlbumDTO): Promise<AlbumView | null> {
    return await prismaClient.albumViews.findFirst({
      where: {
        albumId,
        userId,
      },
    });
  }
}
export { AlbumViewsRepository };

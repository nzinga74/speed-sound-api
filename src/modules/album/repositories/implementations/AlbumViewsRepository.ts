import { ICreateAlbumViewsDTO } from "@modules/album/dtos/ICreateAlbumViewsDTO";
import { IFindAlbumViewsByUserAndAlbumDTO } from "@modules/album/dtos/IFindAlbumViewsByUserAndAlbumDTO";
import { AlbumView } from "@modules/album/models/AlbumView";
import { IAlbumViewsRepository } from "../IAlbumViewsRepository";
import { prismaClient } from "database";
import { MostViewedAlbum } from "@modules/album/models/MostViewedAlbum";

class AlbumViewsRepository implements IAlbumViewsRepository {
  async listMostViewedAlbuns(limit: number): Promise<MostViewedAlbum[]> {
    return await prismaClient.$queryRawUnsafe<MostViewedAlbum[]>(
      `select al.id,count(*) as numberOfViews,us.name ,us.lastname,us.email,al.title,al.description ,al.cover from album_views av inner join album al on av.albumId = al.id inner join users us on al.userId = us.id  group by albumId order by numberOfViews desc limit ${limit};`
    );
  }
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

import { Album } from "@modules/album/models/Album";
import { IAlbumRepository } from "../IAlbumRepository";
import { ICreateAlbumDTO } from "@modules/album/dtos/ICreateAlbumDTO";
import { prismaClient } from "database";
import { FollowedAlbum } from "@modules/album/models/FollowedAlbum";
import { IFindAlbumDTO } from "@modules/album/dtos/IFindAlbumDTO";

class AlbumRepository implements IAlbumRepository {
  async totalAlbums(userId: string): Promise<number> {
    const countAlbums = (await prismaClient.$queryRawUnsafe(
      `select count(*) as totalAlbums from album where userId = "${userId}"`
    )) as any;
    return countAlbums[0]["totalAlbums"];
  }
  async findAlbums({
    albumId,
    categoryId,
    userId,
  }: IFindAlbumDTO): Promise<Album[]> {
    return await prismaClient.album.findMany({
      where: { id: albumId, categoryId, userId },
      include: { user: true },
      orderBy: { created_at: "desc" },
    });
  }
  async listFollowedAlbum(followedId: string): Promise<FollowedAlbum[]> {
    return await prismaClient.$queryRawUnsafe(
      `select _user.id as userId, _user.name, _user.lastname,_album.id,_album.cover,_album.title,_album.description from album _album inner join users _user on _album.userId = _user.id where _album.userId in(select userId from followers where followerId = '${followedId}')`
    );
  }
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
}
export { AlbumRepository };

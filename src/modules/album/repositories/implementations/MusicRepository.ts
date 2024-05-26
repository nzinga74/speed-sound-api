import { ICreateMusicDTO } from "@modules/album/dtos/ICreateMusicDTO";
import { Music } from "@modules/album/models/Music";
import { IMusicRepository } from "../IMusicRepository";
import { prismaClient } from "database";

class MusicRepository implements IMusicRepository {
  async findByAlbum(albumId: string): Promise<Music[]> {
    console.log("cheguei");
    return await prismaClient.music.findMany({
      where: { albumId },
    });
  }
  async create({
    albumId,
    duration,
    title,
    audio,
  }: ICreateMusicDTO): Promise<Music> {
    const music = await prismaClient.music.create({
      data: {
        duration,
        title,
        albumId,
        audio,
      },
    });
    return music;
  }
}

export { MusicRepository };

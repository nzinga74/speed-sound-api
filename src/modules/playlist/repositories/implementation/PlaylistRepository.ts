import { ICreatePlaylistDTO } from "@modules/playlist/dtos/ICreatePlaylistDTO";
import { Playlist } from "@modules/playlist/models/Playlist";
import { IPlaylistRepository } from "../IPlaylistRepository";
import { prismaClient } from "database";

class PlaylistRepository implements IPlaylistRepository {
  async listPlaylistByUserId(userId: string): Promise<Playlist[]> {
    return await prismaClient.playlist.findMany({
      where: { userId },
    });
  }
  async create({ name, userId }: ICreatePlaylistDTO): Promise<Playlist> {
    return await prismaClient.playlist.create({
      data: {
        name,
        userId,
      },
    });
  }
}
export { PlaylistRepository };

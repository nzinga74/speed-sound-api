import { PlaylistMusic } from "@modules/playlist/models/PlaylistMusic";
import { IPlaylistMusicRepository } from "../IPlaylistMusicRepository";
import { prismaClient } from "database";
import { ICreatePlaylistMusicDTO } from "@modules/playlist/dtos/ICreatePlaylistMusicDTO";

class PlaylistMusicRepository implements IPlaylistMusicRepository {
  async listPlaylistMusicByPlaylistId(
    playlistId: string
  ): Promise<PlaylistMusic[]> {
    return await prismaClient.playlistMusic.findMany({
      where: { playlistId },
      include: { Music: true },
    });
  }
  async create({
    playlistId,
    musicId,
  }: ICreatePlaylistMusicDTO): Promise<PlaylistMusic> {
    return prismaClient.playlistMusic.create({
      data: {
        playlistId,
        musicId,
      },
    });
  }
}
export { PlaylistMusicRepository };

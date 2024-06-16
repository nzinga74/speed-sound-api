import { ICreatePlaylistMusicDTO } from "../dtos/ICreatePlaylistMusicDTO";
import { PlaylistMusic } from "../models/PlaylistMusic";

interface IPlaylistMusicRepository {
  create(data: ICreatePlaylistMusicDTO): Promise<PlaylistMusic>;
  listPlaylistMusicByPlaylistId(playlistId: string): Promise<PlaylistMusic[]>;
}

export { IPlaylistMusicRepository };

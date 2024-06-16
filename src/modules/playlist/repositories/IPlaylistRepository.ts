import { ICreatePlaylistDTO } from "../dtos/ICreatePlaylistDTO";
import { Playlist } from "../models/Playlist";

interface IPlaylistRepository {
  create(data: ICreatePlaylistDTO): Promise<Playlist>;
  listPlaylistByUserId(userId: string): Promise<Playlist[]>;
}
export { IPlaylistRepository };

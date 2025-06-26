import { ICreateMusicDTO } from "../dtos/ICreateMusicDTO";
import { Music } from "../models/Music";

interface IMusicRepository {
  create(data: ICreateMusicDTO): Promise<Music>;
  findByAlbum(albumId: string): Promise<Music[]>;
  totalMusic(userId: string): Promise<number>;
}
export { IMusicRepository };

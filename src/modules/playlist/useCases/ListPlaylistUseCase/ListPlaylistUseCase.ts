import { injectable, inject } from "tsyringe";
import { ICreatePlaylistDTO } from "@modules/playlist/dtos/ICreatePlaylistDTO";
import { PlaylistRepository } from "@modules/playlist/repositories/implementation/PlaylistRepository";
import { IPlaylistRepository } from "@modules/playlist/repositories/IPlaylistRepository";

@injectable()
class ListPlaylistUseCase {
  constructor(
    //@ts-ignore
    @inject("PlaylistRepository")
    private playlistRepository: IPlaylistRepository
  ) {}
  async execute(userId: string) {
    try {
      const playlists = await this.playlistRepository.listPlaylistByUserId(
        userId
      );
      return playlists;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListPlaylistUseCase };

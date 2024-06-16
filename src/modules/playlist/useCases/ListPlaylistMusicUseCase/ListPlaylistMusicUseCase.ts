import { IPlaylistMusicRepository } from "@modules/playlist/repositories/IPlaylistMusicRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class ListPLaylistMusicUseCase {
  constructor(
    //@ts-ignore
    @inject("PlaylistMusicRepository")
    private playlistMusicRepository: IPlaylistMusicRepository
  ) {}
  async execute(playlistId: string) {
    try {
      return await this.playlistMusicRepository.listPlaylistMusicByPlaylistId(
        playlistId
      );
    } catch (error) {}
  }
}
export { ListPLaylistMusicUseCase };

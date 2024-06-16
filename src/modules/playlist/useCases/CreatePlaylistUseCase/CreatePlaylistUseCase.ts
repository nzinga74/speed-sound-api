import { injectable, inject } from "tsyringe";
import { ICreatePlaylistDTO } from "@modules/playlist/dtos/ICreatePlaylistDTO";
import { PlaylistRepository } from "@modules/playlist/repositories/implementation/PlaylistRepository";

@injectable()
class CreatePlaylistUseCase {
  constructor(
    //@ts-ignore
    @inject("PlaylistRepository")
    private playlistRepository: PlaylistRepository
  ) {}
  async execute({ name, userId }: ICreatePlaylistDTO) {
    try {
      const playlist = await this.playlistRepository.create({
        name,
        userId,
      });
      return playlist;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreatePlaylistUseCase };

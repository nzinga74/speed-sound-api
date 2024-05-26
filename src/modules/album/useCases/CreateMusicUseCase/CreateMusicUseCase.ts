import { ErrorConstants } from "@errors/ErrorConstants";
import { ICreateMusicDTO } from "@modules/album/dtos/ICreateMusicDTO";
import { IMusicRepository } from "@modules/album/repositories/IMusicRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateMusicUseCase {
  constructor(
    //@ts-ignore
    @inject("MusicRepository")
    private musicRepository: IMusicRepository
  ) {}
  async execute({ albumId, duration, title, audio }: ICreateMusicDTO) {
    try {
      const music = await this.musicRepository.create({
        albumId,
        duration,
        title,
        audio,
      });
      return music;
    } catch (error) {
      //@ts-ignore
      throw new Error(error.message);
    }
  }
}
export { CreateMusicUseCase };

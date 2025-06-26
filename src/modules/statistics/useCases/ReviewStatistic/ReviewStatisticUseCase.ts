import { inject, injectable } from "tsyringe";
import { IVideoRepository } from "@modules/videos/repositories/IVideoRepository";
import { IMusicRepository } from "@modules/album/repositories/IMusicRepository";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
import { IAlbumRepository } from "@modules/album/repositories/IAlbumRepository";

@injectable()
class ReviewStatisticUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoRepository")
    private videoRepository: IVideoRepository,
    //@ts-ignore
    @inject("MusicRepository")
    private musicRepository: IMusicRepository,
    //@ts-ignore
    @inject("FollowerRepository")
    private followerRepository: IFollowerRepository,
    //@ts-ignore
    @inject("AlbumRepository")
    private albumRepository: IAlbumRepository
  ) {}
  async execute(userId: string) {
    const totalVideo = await this.videoRepository.totalVideo(userId);
    const totalMusic = await this.musicRepository.totalMusic(userId);
    const totalFollowers = await this.followerRepository.totalFollowers(userId);
    const totalAlbums = await this.albumRepository.totalAlbums(userId);
    return {
      totalVideo,
      totalMusic,
      totalFollowers,
      totalAlbums,
    };
  }
}
export { ReviewStatisticUseCase };

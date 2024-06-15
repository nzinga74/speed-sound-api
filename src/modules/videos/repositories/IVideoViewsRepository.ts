import { AlbumView } from "@modules/album/models/AlbumView";
import { ICreateVideoViwsDTO } from "../dtos/ICreateVideoViewsDTO";
import { VideoViews } from "../models/VideoViews";
import { IFindVideoViewsByUserAndVideoDTO } from "../dtos/IFindVideoViewsByUserAndVideoDTO";
import { MostVideoView } from "../models/MostVideoVIews";

interface IVideoViewsRepository {
  findMostViewedVideos(limit: number): Promise<MostVideoView[]>;
  create(data: ICreateVideoViwsDTO): Promise<AlbumView>;
  findByUserAndVideo(
    data: IFindVideoViewsByUserAndVideoDTO
  ): Promise<VideoViews | null>;
}
export { IVideoViewsRepository };

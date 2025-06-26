import { ICreateVideoDTO } from "../dtos/ICreateVideoDTO";
import { IFindVideoDTO } from "../dtos/IFindVideoDTO";
import { FollowedVideo } from "../models/FollowedVideo";
import { Video } from "../models/Video";

interface IVideoRepository {
  create(data: ICreateVideoDTO): Promise<Video>;
  listFollowedVideo(followedId: string): Promise<FollowedVideo[]>;
  listVideos(filterVideo: IFindVideoDTO): Promise<Video[]>;
  totalVideo(userId: string): Promise<number>;
}

export { IVideoRepository };

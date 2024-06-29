import { ICreateVideoDTO } from "../dtos/ICreateVideoDTO";
import { FollowedVideo } from "../models/FollowedVideo";
import { Video } from "../models/Video";

interface IVideoRepository {
  create(data: ICreateVideoDTO): Promise<Video>;
  listFollowedVideo(followedId: string): Promise<FollowedVideo[]>;
  listVideoById(videoId: string): Promise<Video | null>;
}

export { IVideoRepository };

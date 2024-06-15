import { AlbumView } from "@modules/album/models/AlbumView";
import { ICreateVideoViwsDTO } from "@modules/videos/dtos/ICreateVideoViewsDTO";
import { IVideoViewsRepository } from "../IVideoViewsRepository";
import { prismaClient } from "database";
import { VideoViews } from "@modules/videos/models/VideoViews";
import { IFindVideoViewsByUserAndVideoDTO } from "@modules/videos/dtos/IFindVideoViewsByUserAndVideoDTO";
import { MostVideoView } from "@modules/videos/models/MostVideoVIews";

class VideoViewsRepository implements IVideoViewsRepository {
  async findMostViewedVideos(limit: number): Promise<MostVideoView[]> {
    return await prismaClient.$queryRawUnsafe<MostVideoView[]>(
      "select _user.id,_user.name,_user.lastname, _user.email, _video.id as videoId,_video.title, _video.description, _video.cover, _video.video, _video.created_at, _video.updated_at, count(*) as numberOfViews from video_views _view  inner join video _video on _video.id = _view.videoId  inner join  users _user on _user.id = _video.userId  group by videoId  order by numberOfViews desc;"
    );
  }
  findByUserAndVideo({
    userId,
    videoId,
  }: IFindVideoViewsByUserAndVideoDTO): Promise<VideoViews | null> {
    return prismaClient.videoViews.findFirst({
      where: { userId, videoId },
    });
  }
  async create({ userId, videoId }: ICreateVideoViwsDTO): Promise<AlbumView> {
    return prismaClient.videoViews.create({
      data: {
        userId,
        videoId,
      },
    });
  }
}

export { VideoViewsRepository };

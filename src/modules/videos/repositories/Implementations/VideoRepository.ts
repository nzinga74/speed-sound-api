import { ICreateVideoDTO } from "@modules/videos/dtos/ICreateVideoDTO";
import { Video } from "@modules/videos/models/Video";
import { IVideoRepository } from "../IVideoRepository";
import { prismaClient } from "database";
import { FollowedVideo } from "@modules/videos/models/FollowedVideo";

class VideoRepository implements IVideoRepository {
  async listVideoById(videoId: string): Promise<Video | null> {
    return await prismaClient.video.findFirst({
      where: { id: videoId },
    });
  }
  async listFollowedVideo(followedId: string): Promise<FollowedVideo[]> {
    return await prismaClient.$queryRawUnsafe<FollowedVideo[]>(
      `select _video.id ,_video.title,_video.description,_video.video,_video.cover,_video.created_at, _user.id as userId, _user.name,_user.lastname from video _video inner join users _user on _user.id = _video.userId  where userId in (select userId from followers where followerId = '${followedId}') order by _video.created_at desc;`
    );
  }
  async create({
    categoryId,
    cover,
    description,
    title,
    video,
    userId,
  }: ICreateVideoDTO): Promise<Video> {
    return await prismaClient.video.create({
      data: {
        cover,
        description,
        title,
        video,
        categoryId,
        userId,
      },
    });
  }
}
export { VideoRepository };

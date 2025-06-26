import { ICreateVideoDTO } from "@modules/videos/dtos/ICreateVideoDTO";
import { Video } from "@modules/videos/models/Video";
import { IVideoRepository } from "../IVideoRepository";
import { prismaClient } from "database";
import { FollowedVideo } from "@modules/videos/models/FollowedVideo";
import { IFindVideoDTO } from "@modules/videos/dtos/IFindVideoDTO";

class VideoRepository implements IVideoRepository {
  async totalVideo(userId: string): Promise<number> {
    const countVideo = (await prismaClient.$queryRawUnsafe(
      `select count(*) as totalVideo from video where userId="${userId}";`
    )) as any;
    return countVideo[0]["totalVideo"];
  }
  async listVideos({
    categoryId,
    userId,
    videoId,
  }: IFindVideoDTO): Promise<Video[]> {
    return await prismaClient.video.findMany({
      where: { id: videoId, categoryId, userId },
      include: { videoViews: true, user: true },
      orderBy: { created_at: "desc" },
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
    hls,
  }: ICreateVideoDTO): Promise<Video> {
    return await prismaClient.video.create({
      data: {
        cover,
        description,
        title,
        video,
        categoryId,
        userId,
        hls,
      },
    });
  }
}
export { VideoRepository };

import { ICreateVideoDTO } from "@modules/videos/dtos/ICreateVideoDTO";
import { Video } from "@modules/videos/models/Video";
import { IVideoRepository } from "../IVideoRepository";
import { prismaClient } from "database";

class VideoRepository implements IVideoRepository {
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

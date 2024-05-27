import { ICreateVideoCategoryDTO } from "@modules/videos/dtos/ICreateVideoCategory";
import { VideoCategory } from "@modules/videos/models/VideoCategory";
import { IVideoCategoryRepository } from "../IVideoCategoryRepository";
import { prismaClient } from "database";

class VideoCategoryRepository implements IVideoCategoryRepository {
  async create({ name }: ICreateVideoCategoryDTO): Promise<VideoCategory> {
    return await prismaClient.videoCategory.create({ data: { name } });
  }
}
export { VideoCategoryRepository };

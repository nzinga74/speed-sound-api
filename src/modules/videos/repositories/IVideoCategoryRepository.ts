import { ICreateVideoCategoryDTO } from "../dtos/ICreateVideoCategory";
import { VideoCategory } from "../models/VideoCategory";

interface IVideoCategoryRepository {
  create(data: ICreateVideoCategoryDTO): Promise<VideoCategory>;
}
export { IVideoCategoryRepository };

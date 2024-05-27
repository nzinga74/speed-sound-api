import { ICreateVideoDTO } from "../dtos/ICreateVideoDTO";
import { Video } from "../models/Video";

interface IVideoRepository {
  create(data: ICreateVideoDTO): Promise<Video>;
}

export { IVideoRepository };

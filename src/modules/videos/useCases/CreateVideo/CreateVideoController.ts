import { ErrorConstants } from "@errors/ErrorConstants";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVideoUseCase } from "./CreateVideoUseCase";
import fs from "fs";
import ffmpeg from "fluent-ffmpeg";
import path from "path";

class CreateVideoController {
  async handle(request: Request, response: Response) {
    const { title, description, categoryId, userId } = request.body;
    const createVideoUseCase = container.resolve(CreateVideoUseCase);
    const files: any = request.files;
    try {
      if (!files || !files.cover || !files.video) {
        return response.status(404).json({
          message: ErrorConstants.FILE_UPLOAD_ERROR,
        });
      }
      const cover = files.cover[0].filename;
      const videoFile = files.video[0].filename;
      const videoId = path.parse(videoFile).name;

      //🟢 Caminho final para o NGINX servir
      const nginxTarget = path.join("/var/www/hls", videoId);
      fs.mkdirSync(nginxTarget, { recursive: true });

      const outputM3U8 = path.join(nginxTarget, "playlist.m3u8");
      const inputPath = files.video[0].path;
      ffmpeg(inputPath)
        .outputOptions([
          "-start_number 0",
          "-hls_time 10",
          "-hls_list_size 0",
          "-f hls",
        ])
        .output(outputM3U8)
        .on("error", (err: any) => {
          console.error("Erro:", err);
          return response
            .status(500)
            .json({ message: "Erro ao converter vídeo" });
        })
        .run();
      const video = await createVideoUseCase.execute({
        categoryId,
        cover,
        description,
        title,
        userId,
        video: videoFile,
        hls: videoId,
      });
      return response.status(200).json({ data: video });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateVideoController };

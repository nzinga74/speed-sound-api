import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { UserRepository } from "@modules/accounts/repositories/implementations/UserRepository";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { BcryptHash } from "@shared/providers/HashProvider/implementations/BcryptHash";
import { ITokenProvider } from "@shared/providers/TokenProvider/ITokenProvider";
import { IAlbumRepository } from "@modules/album/repositories/IAlbumRepository";
import { AlbumRepository } from "@modules/album/repositories/implementations/AlbumRepository";
import { JsonWebToken } from "@shared/providers/TokenProvider/implementations/JsonWebToken";
import { IMusicRepository } from "@modules/album/repositories/IMusicRepository";
import { MusicRepository } from "@modules/album/repositories/implementations/MusicRepository";
import { container } from "tsyringe";
import { IAlbumCategoryRepository } from "@modules/album/repositories/IAlbumCategoryRepository";
import { AlbumCategory } from "@modules/album/models/AlbumCategory";
import { AlbumCategoryRepository } from "@modules/album/repositories/implementations/AlbumCategoryRepository";

container.registerSingleton<IMusicRepository>(
  "MusicRepository",
  MusicRepository
);
container.registerSingleton<IAlbumRepository>(
  "AlbumRepository",
  AlbumRepository
);
container.registerSingleton<IAlbumCategoryRepository>(
  "AlbumCategoryRepository",
  AlbumCategoryRepository
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", BcryptHash);
container.registerSingleton<ITokenProvider>("TokenProvider", JsonWebToken);

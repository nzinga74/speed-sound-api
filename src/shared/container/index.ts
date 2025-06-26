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
import { IVideoRepository } from "@modules/videos/repositories/IVideoRepository";
import { VideoRepository } from "@modules/videos/repositories/Implementations/VideoRepository";
import { IVideoCategoryRepository } from "@modules/videos/repositories/IVideoCategoryRepository";
import { VideoCategoryRepository } from "@modules/videos/repositories/Implementations/VideoCategoryRepository";
import { IAlbumViewsRepository } from "@modules/album/repositories/IAlbumViewsRepository";
import { AlbumViewsRepository } from "@modules/album/repositories/implementations/AlbumViewsRepository";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
import { FollowerRepository } from "@modules/users/repositories/Implementations/FollowerRepository";
import { IVideoViewsRepository } from "@modules/videos/repositories/IVideoViewsRepository";
import { VideoViewsRepository } from "@modules/videos/repositories/Implementations/VideoViewsRepository";
import { PlaylistRepository } from "@modules/playlist/repositories/implementation/PlaylistRepository";
import { IPlaylistRepository } from "@modules/playlist/repositories/IPlaylistRepository";
import { PlaylistMusicRepository } from "@modules/playlist/repositories/implementation/PlaylistMusicRepository";
import { IPlaylistMusicRepository } from "@modules/playlist/repositories/IPlaylistMusicRepository";
import { IProfileRepository } from "@modules/users/repositories/IProfileRepository";
import { ProfileRepository } from "@modules/users/repositories/Implementations/ProfileRepository";
import { IRadioRepository } from "@modules/radios/repositories/IRadioRepository";
import { RadioRepository } from "@modules/radios/repositories/implementations/RadioRepository";
import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { ArtistRepository } from "@modules/artists/repositories/ArtistRepository/ArtistRepository";

container.registerSingleton<IPlaylistRepository>(
  "PlaylistRepository",
  PlaylistRepository
);

container.registerSingleton<IPlaylistMusicRepository>(
  "PlaylistMusicRepository",
  PlaylistMusicRepository
);
container.registerSingleton<IFollowerRepository>(
  "FollowerRepository",
  FollowerRepository
);
container.registerSingleton<IVideoViewsRepository>(
  "VideoViewsRepository",
  VideoViewsRepository
);
container.registerSingleton<IMusicRepository>(
  "MusicRepository",
  MusicRepository
);
container.registerSingleton<IAlbumViewsRepository>(
  "AlbumViewsRepository",
  AlbumViewsRepository
);
container.registerSingleton<IVideoCategoryRepository>(
  "VideoCategoryRepository",
  VideoCategoryRepository
);
container.registerSingleton<IVideoRepository>(
  "VideoRepository",
  VideoRepository
);
container.registerSingleton<IAlbumRepository>(
  "AlbumRepository",
  AlbumRepository
);
container.registerSingleton<IAlbumCategoryRepository>(
  "AlbumCategoryRepository",
  AlbumCategoryRepository
);
container.registerSingleton<IRadioRepository>(
  "RadioRepository",
  RadioRepository
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", BcryptHash);
container.registerSingleton<ITokenProvider>("TokenProvider", JsonWebToken);
container.registerSingleton<IProfileRepository>(
  "ProfileRepository",
  ProfileRepository
);

container.registerSingleton<IArtistRepository>(
  "ArtistRepository",
  ArtistRepository
);

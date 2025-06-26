import { inject, injectable } from "tsyringe";
import * as bcrypt from "bcryptjs";
import { ICreateUserDto } from "@modules/accounts/dtos/ICreateUserDto";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { User } from "@modules/accounts/models/User";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { ErrorConstants } from "@errors/ErrorConstants";
import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { Artist } from "@modules/artists/models/Artist";
import { ICreateArtist } from "@modules/artists/dtos/ICreateArtist";

@injectable()
class CreateArtistUseCase {
  constructor(
    //@ts-ignore
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ) {}
  async execute({
    biography,
    image,
    musicGenreId,
    name,
    realName,
    userId,
  }: ICreateArtist): Promise<Artist> {
    try {
      const artist = await this.artistRepository.create({
        name,
        biography,
        image,
        musicGenreId,
        realName,
        userId,
      });
      return artist;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.CREATE_USER_ERROR);
    }
  }
}

export { CreateArtistUseCase };

import { ICreateArtist } from "@modules/artists/dtos/ICreateArtist";
import { Artist, ArtistUser } from "@modules/artists/models/Artist";
import { IArtistRepository } from "../IArtistRepository";
import { prismaClient } from "database";
import { Role } from "@prisma/client";
import { ICreateArtistMember } from "@modules/artists/dtos/ICreateArtistMember";

class ArtistRepository implements IArtistRepository {
  async addMember({
    memberId,
    role,
    artistId,
  }: ICreateArtistMember): Promise<ArtistUser> {
    return await prismaClient.artistUser.create({
      data: {
        role,
        userId: memberId,
        artistId,
      },
    });
  }
  async create({
    biography,
    image,
    musicGenreId,
    name,
    realName,
    userId,
  }: ICreateArtist): Promise<Artist> {
    return await prismaClient.artist.create({
      data: {
        image,
        name,
        realName,
        biography,
        musicGenreId,
        ArtistUser: {
          create: {
            role: Role.ADMIN,
            userId,
          },
        },
      },
    });
  }
}

export { ArtistRepository };

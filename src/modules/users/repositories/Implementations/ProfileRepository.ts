import { IProfileDTO } from "@modules/users/dtos/IProfileDTO";
import { Profile } from "@modules/users/models/Profile";
import { IProfileRepository } from "../IProfileRepository";
import { prismaClient } from "database";

class ProfileRepository implements IProfileRepository {
  async create({ description, image, userId }: IProfileDTO): Promise<Profile> {
    return await prismaClient.profile.create({
      data: { description, image, userId },
    });
  }
}
export { ProfileRepository };

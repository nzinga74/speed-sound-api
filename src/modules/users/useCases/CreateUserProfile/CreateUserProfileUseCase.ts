import { IProfileDTO } from "@modules/users/dtos/IProfileDTO";
import { IProfileRepository } from "@modules/users/repositories/IProfileRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateUserProfileUseCase {
  constructor(
    //@ts-ignore
    @inject("ProfileRepository")
    private profileRepository: IProfileRepository
  ) {}
  async execute({ description, image, userId }: IProfileDTO) {
    try {
      const profile = await this.profileRepository.create({
        description,
        image,
        userId,
      });
      return profile;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { CreateUserProfileUseCase };

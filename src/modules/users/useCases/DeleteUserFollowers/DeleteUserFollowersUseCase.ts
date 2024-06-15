import { inject, injectable } from "tsyringe";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
import { IDeleteFollowersDTO } from "@modules/users/dtos/DeleteFollowersDTO";

@injectable()
class DeleteUserFolloweUseCase {
  constructor(
    //@ts-ignore
    @inject("FollowerRepository")
    private followerRepository: IFollowerRepository
  ) {}
  async execute({ followerId, userId }: IDeleteFollowersDTO) {
    try {
      const deletedFollower =
        await this.followerRepository.deleteFollowerByIdAndUserId({
          followerId,
          userId,
        });
      return deletedFollower;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { DeleteUserFolloweUseCase };

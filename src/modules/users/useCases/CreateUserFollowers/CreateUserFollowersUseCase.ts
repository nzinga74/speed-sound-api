import { ErrorConstants } from "@errors/ErrorConstants";
import { ICreateFollowersDTO } from "@modules/users/dtos/CreateFollowersDTO";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class CreateUserFollowersUseCase {
  constructor(
    //@ts-ignore
    @inject("FollowerRepository")
    private followerRepository: IFollowerRepository
  ) {}
  async execute({ followerId, userId }: ICreateFollowersDTO) {
    const existsFollower =
      await this.followerRepository.findFollowerByIdAndUserId(
        userId,
        followerId
      );
    if (existsFollower) {
      throw new Error(ErrorConstants.FOLLOWER_ALREADY_EXISTS);
    }
    try {
      const follower = await this.followerRepository.create({
        followerId,
        userId,
      });
      return follower;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateUserFollowersUseCase };

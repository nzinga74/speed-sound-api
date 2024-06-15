import { injectable, inject } from "tsyringe";
import { IListfollowersDTO } from "@modules/users/dtos/ListfollowersDTO";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
@injectable()
class ListUserFollowersUseCase {
  constructor(
    //@ts-ignore
    @inject("FollowerRepository")
    private followerRepository: IFollowerRepository
  ) {}
  async execute({ followerId, userId }: IListfollowersDTO) {
    try {
      const userFollowerQuery: IListfollowersDTO = {} as IListfollowersDTO;
      if (followerId) {
        userFollowerQuery.followerId = followerId;
      }
      if (userId) {
        userFollowerQuery.userId = userId;
      }
      const followers =
        this.followerRepository.listFollowerByIdAndUserId(userFollowerQuery);
      return followers;
    } catch (error: any) {}
  }
}
export { ListUserFollowersUseCase };

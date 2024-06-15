import { inject, injectable } from "tsyringe";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
@injectable()
class ListMostFollowedUsersUseCase {
  constructor(
    //@ts-ignore
    @inject("FollowerRepository")
    private followerRepository: IFollowerRepository
  ) {}

  async execute(limit: number) {
    try {
      return await this.followerRepository.listMostFollowedUsers(limit);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { ListMostFollowedUsersUseCase };

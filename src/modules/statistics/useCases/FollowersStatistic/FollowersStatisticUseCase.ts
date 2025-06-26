import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class FollowerStatisticUseCase {
  constructor(
    //@ts-ignore
    @inject("FollowerRepository")
    private followerRepository: IFollowerRepository
  ) {}
  async execute(userId: string, year: number) {
    let followersStatistics = await this.followerRepository.followersStatistics(
      userId,
      year
    );
    for (let i = 1; i <= 12; i++) {
      const filterExistMonth = followersStatistics.find((f) => f.month == i);
      if (!filterExistMonth) {
        followersStatistics.push({
          month: i,
          totalFollowers: 0,
        });
      }
    }
    followersStatistics.sort((a, b) => {
      return a.month < b.month ? -1 : a.month > b.month ? 1 : 0;
    });
    return followersStatistics;
  }
}

export { FollowerStatisticUseCase };

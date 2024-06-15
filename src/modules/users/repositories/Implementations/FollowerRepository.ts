import { ICreateFollowersDTO } from "@modules/users/dtos/CreateFollowersDTO";
import { Follower } from "@modules/users/models/Follower";
import { IFollowerRepository } from "../IFollowerRepository";
import { prismaClient } from "database";
import { IDeleteFollowersDTO } from "@modules/users/dtos/DeleteFollowersDTO";
import { IListfollowersDTO } from "@modules/users/dtos/ListfollowersDTO";
import { MostFollower } from "@modules/users/models/MostFollower";

class FollowerRepository implements IFollowerRepository {
  async listMostFollowedUsers(limit: number): Promise<MostFollower[]> {
    //@ts-ignore
    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };
    return await prismaClient.$queryRawUnsafe<MostFollower[]>(
      `select  us.id, us.email,us.name, us.lastname,count(*) as numberOfFollower from followers f inner join users us on f.userId = us.id group by userId order by numberOfFollower desc`
    );
  }
  async listFollowerByIdAndUserId({
    followerId,
    userId,
  }: IListfollowersDTO): Promise<Follower[]> {
    return await prismaClient.followers.findMany({
      where: { followerId, userId },
    });
  }
  async deleteFollowerByIdAndUserId({
    followerId,
    userId,
  }: IDeleteFollowersDTO): Promise<Follower> {
    return await prismaClient.followers.delete({
      where: { followerId, userId },
    });
  }
  findFollowerByIdAndUserId(
    userId: string,
    followerId: string
  ): Promise<Follower | null> {
    return prismaClient.followers.findFirst({
      where: { userId, followerId },
    });
  }
  async create({ followerId, userId }: ICreateFollowersDTO): Promise<Follower> {
    return await prismaClient.followers.create({
      data: {
        followerId,
        userId,
      },
    });
  }
}
export { FollowerRepository };

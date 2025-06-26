import { ICreateFollowersDTO } from "@modules/users/dtos/CreateFollowersDTO";
import { Follower } from "@modules/users/models/Follower";
import { IFollowerRepository } from "../IFollowerRepository";
import { prismaClient } from "database";
import { IDeleteFollowersDTO } from "@modules/users/dtos/DeleteFollowersDTO";
import { IListfollowersDTO } from "@modules/users/dtos/ListfollowersDTO";
import { MostFollower } from "@modules/users/models/MostFollower";

class FollowerRepository implements IFollowerRepository {
  async followersStatistics(userId: string, year: number): Promise<any[]> {
    return await prismaClient.$queryRawUnsafe(`select month(created_at) as month,count(*) as totalFollowers from followers where userId = "${userId}" and year(created_at) = ${year} group by month(created_at)
`);
  }
  async totalFollowers(userId: string): Promise<number> {
    const countFollowers = (await prismaClient.$queryRawUnsafe(
      `select count(*) as totalFollowers from followers where userId = "${userId}" `
    )) as any;
    return countFollowers[0]["totalFollowers"];
  }
  async listMostFollowedUsers(limit: number): Promise<MostFollower[]> {
    //@ts-ignore
    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };
    return await prismaClient.$queryRawUnsafe<MostFollower[]>(
      "SELECT us.id, us.email,us.name,us.lastname,prof.image,COUNT(*) AS numberOfFollower FROM followers f INNER JOIN users us ON f.userId = us.id LEFT JOIN profile prof ON f.userId = prof.userId GROUP BY f.userId,prof.image order  BY numberOfFollower DESC LIMIT 10"
      //`select  us.id, us.email,us.name, us.lastname,count(*) as numberOfFollower from followers f inner join users us on f.userId = us.id group by userId order by numberOfFollower desc limit 10`
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

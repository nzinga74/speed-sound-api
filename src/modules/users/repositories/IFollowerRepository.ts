import { ICreateFollowersDTO } from "../dtos/CreateFollowersDTO";
import { IDeleteFollowersDTO } from "../dtos/DeleteFollowersDTO";
import { IListfollowersDTO } from "../dtos/ListfollowersDTO";
import { Follower } from "../models/Follower";
import { MostFollower } from "../models/MostFollower";

interface IFollowerRepository {
  create(data: ICreateFollowersDTO): Promise<Follower>;
  findFollowerByIdAndUserId(
    userId: string,
    followerId: string
  ): Promise<Follower | null>;
  deleteFollowerByIdAndUserId(data: IDeleteFollowersDTO): Promise<Follower>;
  listFollowerByIdAndUserId(data: IListfollowersDTO): Promise<Follower[]>;
  listMostFollowedUsers(limit: number): Promise<MostFollower[]>;
  totalFollowers(userId: string): Promise<number>;
  followersStatistics(userId: string, year: number): Promise<any[]>;
}

export { IFollowerRepository };

import { User } from "@modules/accounts/models/User";

class Follower {
  id?: string;
  userId: string;
  followerId: string;
  user?: User;
  follower?: User;
  created_at?: Date;
  updated_at?: Date;
}
export { Follower };

import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { IFollowerRepository } from "@modules/users/repositories/IFollowerRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class ListUserUseCase {
  constructor(
    //@ts-ignore
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(userId: string) {
    try {
      const user = await this.userRepository.findById(userId);
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { ListUserUseCase };

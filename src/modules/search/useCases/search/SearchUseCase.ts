import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class SearchUseCase {
  constructor(
    //@ts-ignore
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(name: string) {
    try {
      const users = await this.userRepository.searchName(name);
      return {
        users,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { SearchUseCase };

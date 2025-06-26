import { IProfileDTO } from "../dtos/IProfileDTO";
import { Profile } from "../models/Profile";

export interface IProfileRepository {
  create(data: IProfileDTO): Promise<Profile>;
}

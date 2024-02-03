import * as bcrypt from "bcryptjs";
import { IHashProvider } from "../IHashProvider";
class BcryptHash implements IHashProvider {
  compare(str: string, strHashed: string): Promise<boolean> {
    return bcrypt.compare(str, strHashed);
  }
  async hash(str: string, salt: number): Promise<string> {
    return await bcrypt.hash(str, salt);
  }
}

export { BcryptHash };

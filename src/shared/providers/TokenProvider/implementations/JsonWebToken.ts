import { ITokenProvider } from "../ITokenProvider";
import jsonwebtoken from "jsonwebtoken";
import tokenConfig from "@config/jstoken";

class JsonWebToken implements ITokenProvider {
  sign(subject: number): string {
    const token = jsonwebtoken.sign({}, tokenConfig.secret, {
      subject: subject.toString(),
      expiresIn: tokenConfig.expiresIn,
    });
    return token;
  }
}
export { JsonWebToken };

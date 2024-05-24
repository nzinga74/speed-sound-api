import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { ClientRepository } from "@modules/accounts/repositories/implementations/ClientRepository";
import { UserRepository } from "@modules/accounts/repositories/implementations/UserRepository";
import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { BcryptHash } from "@shared/providers/HashProvider/implementations/BcryptHash";
import { ITokenProvider } from "@shared/providers/TokenProvider/ITokenProvider";
import { JsonWebToken } from "@shared/providers/TokenProvider/implementations/JsonWebToken";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", BcryptHash);
container.registerSingleton<ITokenProvider>("TokenProvider", JsonWebToken);

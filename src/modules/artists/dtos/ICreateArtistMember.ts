import { Role } from "@prisma/client";

interface ICreateArtistMember {
  memberId: string;
  artistId: string;
  role: Role;
}
export { ICreateArtistMember };

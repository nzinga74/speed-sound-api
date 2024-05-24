import { Album } from "@prisma/client";

class Music {
  id: number;
  title: string;
  duration: string;
  albumId: string;
  album?: Album;
}

export { Music };

import { Album } from "@prisma/client";

class Music {
  id: String;
  title: string;
  duration: string;
  albumId: String;
  album?: Album;
  created_at?: Date;
  updated_at?: Date;
}

export { Music };

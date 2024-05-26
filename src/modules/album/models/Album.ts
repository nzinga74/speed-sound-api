import { AlbumCategory } from "./AlbumCategory";

class Album {
  id: string;
  cover: string;
  title: string;
  description: string;
  userId: string;
  categoryId: string;
  category?: AlbumCategory;
  created_at?: Date;
  updated_at?: Date;
}

export { Album };

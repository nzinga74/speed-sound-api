class Video {
  id?: string;
  title: string;
  description: string;
  video: string;
  cover: string;
  categoryId: string;
  hls: string | null;
  created_at?: Date;
  updated_at?: Date;
}
export { Video };

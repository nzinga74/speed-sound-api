interface ICreateVideoDTO {
  title: string;
  description: string;
  video: string;
  cover: string;
  userId: string;
  categoryId: string;
  hls?: string;
}
export { ICreateVideoDTO };

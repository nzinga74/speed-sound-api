interface ICreateArtist {
  name: string;
  realName: string;
  biography: string;
  image: string | null;
  musicGenreId: string;
  userId: string;
}

export { ICreateArtist };

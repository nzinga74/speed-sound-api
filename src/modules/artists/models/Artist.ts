class Artist {
  id: string;
  name: string;
  realName: string;
  biography: string | null;
  image: string | null;
  musicGenreId: string;
}

class ArtistGenre {
  id: string;
  description: string;
}

class ArtistUser {
  id: string;
  artistId: string;
  userId: string;
}

export { Artist, ArtistGenre, ArtistUser };

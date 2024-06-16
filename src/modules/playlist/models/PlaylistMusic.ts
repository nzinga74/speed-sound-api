import { Playlist } from "./Playlist";
import { Music } from "@modules/album/models/Music";

class PlaylistMusic {
  playlistId: string;
  musicId: string;
  playlist?: Playlist;
  music?: Music;
  created_at?: Date;
  updated_at?: Date;
}
export { PlaylistMusic };

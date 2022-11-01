import { Track } from './track.interface';

export interface Playlist {
  name: string;
  description: string;
  tracks: Track[];
}

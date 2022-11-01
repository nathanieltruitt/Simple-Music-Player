// TODO: complete track model
export interface Track {
  name: string;
  artists: any[]; // * refer to line 29 for result-info.component.ts
  album: any; // TODO: need interface for album
  uri: string;
  release_date: string;
  duration_ms: string;
}

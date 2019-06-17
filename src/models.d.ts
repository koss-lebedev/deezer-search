declare type Album = {
  id: number;
  title: string;
  cover: string;
};

declare type Track = {
  id: number;
  title: string;
  album: Album;
};

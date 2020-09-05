export type LikesTypes = 'photo' | 'video' | 'link' | 'post';

export type VKLink = {
  id: string;
  url: string;
  title: string;
};

export type VKPhoto = {
  id: number;
  owner_id: number;
  access_key: string;
  album_id: number;
  date: number;
  text: string;
  sizes: ReadonlyArray<{
    height: number;
    type: string;
    url: string;
    width: number;
  }>;
};

export type VKVideo = {
  id: number;
  owner_id: number;
  title: string;
  description: string;
  photo_130: string;
  photo_320: string;
  photo_640: string;
  photo_800: string;
  photo_1280: string;
};

export type VKPost = {
  id: number;
  from_id: number;
  owner_id: number;
  date: number;
  marked_as_ads: number;
  post_type: string;
  created_by: number;
  text: string;
};

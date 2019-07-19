export interface IVKLikesRemover {}

export interface IVKLikesRemoverState {
  isLoading: boolean;
  token: string;
  likes: {
    type: string;
    items: ReadonlyArray<any>;
    count: number;
  };
  request: {
    [key: string]: number;
  };
  errors: any;
}

export interface IVKLikesRemoverLikesList {
  readonly type: string;
  readonly likes: ReadonlyArray<any>;
  readonly onRemove: (...args: any) => void;
}

export interface IVKLikesRemoverLinks {
  readonly links: ReadonlyArray<IVKLink>;
  readonly onRemove: (id: string) => void;
}

export interface IVKLikesRemoverPhotos {
  readonly photos: ReadonlyArray<IVKPhoto>;
  readonly onRemove: (id: number, ownerId: number) => void;
}

export interface IVKLikesRemoverVideos {
  readonly videos: ReadonlyArray<IVKVideo>;
  readonly onRemove: (id: number, ownerId: number) => void;
}

export interface IVKLikesRemoverPosts {
  readonly posts: ReadonlyArray<IVKPost>;
  readonly onRemove: (id: number, ownerId: number) => void;
}

export interface IVKLink {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly onRemove: (id: string) => void;
}

export interface IVKPhoto {
  readonly id: number;
  readonly owner_id: number;
  readonly access_key: string;
  readonly album_id: number;
  readonly date: number;
  readonly text: string;
  readonly sizes: ReadonlyArray<{
    readonly height: number;
    readonly type: string;
    readonly url: string;
    readonly width: number;
  }>;
  readonly onRemove: (id: number, ownerId: number) => void;
}

export interface IVKVideo {
  readonly id: number;
  readonly owner_id: number;
  readonly title: string;
  readonly description: string;
  readonly photo_130: string;
  readonly photo_320: string;
  readonly photo_640: string;
  readonly photo_800: string;
  readonly photo_1280: string;
  readonly onRemove: (id: number, ownerId: number) => void;
}

export interface IVKPost {
  readonly id: number;
  readonly from_id: number;
  readonly owner_id: number;
  readonly date: number;
  readonly marked_as_ads: number;
  readonly post_type: string;
  readonly created_by: number;
  readonly text: string;
  readonly onRemove: (id: number, ownerId: number) => void;
}

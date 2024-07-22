interface ImageData {
  id: number;
  attributes: {
    url: string;
  };
}

interface Banner {
  data: ImageData[];
}

interface Attributes {
  Banner: Banner;
  Header: string;
  Date: string;
  Author?: string;
  TimeToRead: number;
}

export interface NewsCardMiniData {
  id: number;
  attributes: Attributes;
}

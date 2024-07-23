interface ImageAttributes {
  url: string;
}

interface ImageData {
  attributes: ImageAttributes;
}

interface Banner {
  data: ImageData[];
}

interface RepeatableRichText {
  Content: string;
}

interface Attributes {
  Banner: Banner;
  Date: string;
  Header: string;
  RepeatableRichText: RepeatableRichText[];
  Author?: string;
  TimeToRead: number;
}

export interface NewsCardData {
  id: number;
  attributes: Attributes;
}

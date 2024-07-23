import type { NewsCardData } from "./NewsCardData";

export interface PostData {
  post: Post;
  latestPosts: NewsCardData[];
}

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
  Header: string;
  Date: string;
  Author?: string;
  TimeToRead: number;
  Banner: Banner;
  RepeatableRichText: RepeatableRichText[];
}

interface Post {
  id: string;
  attributes: Attributes;
}

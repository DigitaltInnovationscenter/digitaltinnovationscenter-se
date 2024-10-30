import type { NewsCardData } from "./NewsCardData";

export interface PostData {
  post: Post;
  latestPosts: NewsCardData[];
}

interface Banner {
  url: string;
}

interface RepeatableRichText {
  Content: string;
}

interface Post {
  documentId: string;
  Header: string;
  Date: string;
  Author?: string;
  TimeToRead: number;
  Banner: Banner[];
  RepeatableRichText: RepeatableRichText[];
}

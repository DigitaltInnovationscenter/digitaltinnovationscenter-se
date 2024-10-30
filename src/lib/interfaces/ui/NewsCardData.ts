export interface NewsCardData {
  documentId: string;
  Banner: Banner[];
  Date: string;
  Header: string;
  RepeatableRichText: RepeatableRichText[];
  Author?: string;
  TimeToRead: number;
  publishedAt: string;
  slug?: string;
}

interface Banner {
  url: string;
}

interface RepeatableRichText {
  Content: string;
}

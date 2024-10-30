export interface NewsCardMiniData {
  documentId: string;
  Banner: Banner[];
  Header: string;
  Date: string;
  Author?: string;
  TimeToRead: number;
  slug?: string;
}

interface Banner {
  id: number;
  url: string;
}

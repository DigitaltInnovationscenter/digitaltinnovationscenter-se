export interface SwiperProjectsData {
  projects: Project[];
  Header: string;
}

interface Banner {
  url: string;
}

interface RepeatableRichText {
  Content: string;
}

interface Project {
  documentId: string;
  MainHeader: string;
  Banner: Banner[];
  RepeatableRichText: RepeatableRichText[];
  slug?: string;
  publishedAt?: string;
}

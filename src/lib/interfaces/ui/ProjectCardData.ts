export interface ProjectCardData {
  documentId: string;
  Banner: Banner[];
  MainHeader: string;
  RepeatableRichText?: RepeatableRichText[];
  slug?: string;
  CTA?: CTA[];
  date: string;
}

interface Banner {
  url: string;
}

interface CTA {
  url: string;
  text: string;
}

interface RepeatableRichText {
  Content: string;
}

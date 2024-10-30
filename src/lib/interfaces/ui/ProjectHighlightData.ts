export interface ProjectHighlightData {
  documentId: string;
  SubHeader: string;
  MainHeader: string;
  Progress: string;
  Banner: Banner[];
  slug?: string;
  CTA?: CTA[];
  RepeatableRichText?: RepeatableRichText[];
}

export interface CTA {
  url: string;
  text: string;
  external?: boolean;
}

interface Banner {
  url: string;
}

interface RepeatableRichText {
  Content: string;
}

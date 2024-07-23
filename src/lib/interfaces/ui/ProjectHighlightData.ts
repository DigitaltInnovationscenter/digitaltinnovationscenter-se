export interface ProjectHighlightData {
  id: string;
  attributes: Attributes;
}

export interface CTA {
  url: string;
  text: string;
  external?: boolean;
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
  SubHeader: string;
  MainHeader: string;
  Progress: string;
  Banner: Banner;
  CTA?: CTA[];
  RepeatableRichText?: RepeatableRichText[];
}

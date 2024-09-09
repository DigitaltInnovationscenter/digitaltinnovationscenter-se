export interface ProjectCardDataAttributes {
  Banner: Banner;
  MainHeader: string;
  RepeatableRichText?: RepeatableRichText[];
  slug?: string;
  CTA?: CTA[];
}

export interface ProjectCardData {
  id: number;
  attributes: ProjectCardDataAttributes;
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

interface CTA {
  url: string;
  text: string;
}

interface RepeatableRichText {
  Content: string;
}

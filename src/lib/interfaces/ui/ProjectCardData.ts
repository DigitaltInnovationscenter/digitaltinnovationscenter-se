// src/lib/interfaces/ui/ProjectCardData.ts

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

export interface ProjectCardDataAttributes {
  Banner: Banner;
  MainHeader: string;
  RepeatableRichText?: RepeatableRichText[];
  CTA?: CTA[];
}

export interface ProjectCardData {
  id: number;
  attributes: ProjectCardDataAttributes;
}

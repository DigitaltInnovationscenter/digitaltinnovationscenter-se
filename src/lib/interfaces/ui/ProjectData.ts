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

interface CTACard {
  header: string;
  description: string;
  url: string;
  buttonText: string;
  external?: boolean;
}

interface Attributes {
  MainHeader: string;
  SubHeader?: string;
  Progress: string;
  Horisont?: string;
  TimeToRead?: number;
  Author?: string;
  Banner: Banner;
  RepeatableRichText: RepeatableRichText[];
  CTACard: CTACard[];
}

interface Project {
  id: string;
  attributes: Attributes;
}

export interface ProjectData {
  project: Project;
}

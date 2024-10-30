export interface ProjectData {
  project: Project;
}

interface Banner {
  url: string;
}

interface RepeatableRichText {
  Content: string;
  ForegroundColor: string;
  BackgroundColor: string;
  Width: string;
}

interface CTACard {
  header: string;
  description: string;
  url: string;
  buttonText: string;
  external?: boolean;
}

interface Project {
  documentId: string;
  MainHeader: string;
  SubHeader?: string;
  Progress: string;
  Horisont?: string;
  TimeToRead?: number;
  Author?: string;
  Banner: Banner[];
  RepeatableRichText: RepeatableRichText[];
  CTACard: CTACard[];
}

export interface SwiperProjectsData {
  projects: Projects;
  Header: string;
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
  MainHeader: string;
  Banner: Banner;
  RepeatableRichText: RepeatableRichText[];
  slug?: string;
}

interface Project {
  id: string;
  attributes: Attributes;
}

interface Projects {
  data: Project[];
}

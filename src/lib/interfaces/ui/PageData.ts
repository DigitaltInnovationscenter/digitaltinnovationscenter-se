import type { ProjectCardData } from "./ProjectCardData";
import type { ProjectHighlightData } from "./ProjectHighlightData";
import type { SharedHeroData } from "./SharedHeroData";
import type { TechCardData } from "./TechCardData";

interface HeroData extends SharedHeroData {
  __component: "block.project-hero";
}

interface ProjectData {
  __component: "block.section-project";
  Header: string;
  projects: {
    data:
      | ProjectHighlightData
      | ProjectHighlightData[]
      | ProjectCardData
      | ProjectCardData[];
  };
}

interface TechGroupData extends TechCardData {
  __component: "block.tech-group";
  TechCard: TechCardData[];
}

type Page = HeroData | ProjectData | TechGroupData;

export interface PageData {
  pages: Page[];
}

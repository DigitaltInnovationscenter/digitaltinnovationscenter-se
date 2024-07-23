import type { ProjectCardData } from "./ProjectCardData";
import type { SharedHeroData } from "./SharedHeroData";
import type { TechCardData } from "./TechCardData";

interface HeroData extends SharedHeroData {
  __component: "block.project-hero";
}

interface ProjectData {
  __component: "block.section-project";
  Header: string;
  projects: {
    data: ProjectCardData[];
  };
}

interface ProjectsOverviewData {
  __component: "block.section-project";
  Header: string;
  projects: {
    data: any; // Replace with real interface
  };
}

interface TechGroupData extends TechCardData {
  __component: "block.tech-group";
  TechCard: TechCardData[];
}

type Page = HeroData | ProjectData | ProjectsOverviewData | TechGroupData;

export interface PageData {
  pages: Page[];
}

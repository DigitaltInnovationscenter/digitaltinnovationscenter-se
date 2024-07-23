import type { TechCardData } from "./TechCardData";

export interface ExploreData {
  Header: string;
  TechCard: TechCardData[];
  CTA?: CTA[];
}

interface CTA {
  url: string;
  text: string;
}

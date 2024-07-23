import type { TechCardData } from "./TechCardData";

interface CTA {
  url: string;
  text: string;
}

export interface ExploreData {
  Header: string;
  TechCard: TechCardData[];
  CTA?: CTA[];
}

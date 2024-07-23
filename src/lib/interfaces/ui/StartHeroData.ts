export interface StartHeroData {
  MainHeader: string;
  CTA?: CTA[];
}

interface CTA {
  url: string;
  text: string;
}

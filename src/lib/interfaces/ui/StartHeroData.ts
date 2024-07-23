interface CTA {
  url: string;
  text: string;
}

export interface StartHeroData {
  MainHeader: string;
  CTA?: CTA[];
}

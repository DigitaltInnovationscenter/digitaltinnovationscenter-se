interface ImageAttributes {
  url: string;
}

interface ImageData {
  attributes: ImageAttributes;
}

interface FigureContent {
  Header: string;
  TextBlock: string;
  id: number;
  position: "right" | "bottom" | "top";
  smallLogo: { data: ImageData };
  svg: { data: ImageData };
}

export interface HeroFigureData {
  header: string;
  content: FigureContent[];
}

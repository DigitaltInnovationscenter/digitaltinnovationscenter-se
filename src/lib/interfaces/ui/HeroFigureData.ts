export interface HeroFigureData {
  header: string;
  content: FigureContent[];
}

interface ImageData {
  url: string;
}

interface FigureContent {
  Header: string;
  TextBlock: string;
  id: number;
  position: "right" | "bottom" | "top";
  smallLogo: ImageData;
  svg: ImageData;
}

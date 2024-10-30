export interface ApiAboutData {
  header: string;
  content: {
    Header: string;
    TextBlock: string;
    id: number;
    position: "right" | "bottom" | "top";
    smallLogo: { url: string };
    svg: { url: string };
  }[];
}

export interface ApiTeamData {
  header: string;
  content: {
    Description: string;
    Name: string;
    MemberImage: { url: string | null };
    Role: string;
  }[];
}

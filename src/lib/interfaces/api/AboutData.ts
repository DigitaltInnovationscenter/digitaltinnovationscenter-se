export interface ApiAboutData {
  header: string;
  content: {
    Header: string;
    TextBlock: string;
    id: number;
    position: "right" | "bottom" | "top";
    smallLogo: { data: { attributes: { url: string } } };
    svg: { data: { attributes: { url: string } } };
  }[];
}

export interface ApiTeamData {
  header: string;
  content: {
    Description: string;
    Name: string;
    MemberImage: { data: { attributes: { url: string } } | null };
    Role: string;
  }[];
}

export interface TeamMember {
  Description: string;
  Name: string;
  MemberImage: MemberImage;
  Role: string;
}

export interface TeamData {
  header: string;
  content: TeamMember[];
}

interface MemberImage {
  data: {
    attributes: {
      url: string;
    };
  } | null;
}

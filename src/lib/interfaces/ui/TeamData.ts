// src/lib/interfaces/ui/TeamData.ts

interface MemberImage {
  data: {
    attributes: {
      url: string;
    };
  } | null;
}

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

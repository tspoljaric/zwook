export interface Podcast {
    id: number;
    title: string;
    creator?: string;
    descriptionLink?: string;
    description?: string;
    status: boolean;
    premium: boolean;
    makeDefault: boolean;
    visible: boolean;
    imageUrl?: string;
    duration?: string;
  }
  
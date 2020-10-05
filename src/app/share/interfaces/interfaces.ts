export interface IQQuestion {
  category: string;
  question: string;
  answers: IAnswer[];
}
export interface ITrustBuildCanvas {
  categories: ITrustBuildCategory[];
}

export interface ITrustBuildCategory {
  category: string;
  questions: IQuestion[];
}
export interface IQuestion {
  question: string;
  answer: string;
}

export interface IAnswer {
  answer: string;
}

export interface IBusinessModel {
  id: string;
  name: string;
  keyPartners: string;
  keyActivities: string;
  valueProposition: string;
  customerRelationships: string;
  customerSegments: string;
  keyResources: string;
  channels: string;
  costStructure: string;
  revenueStreams: string;
}

interface IFeedback {
  feedback: string;
  createdAt: string
}

export interface IColumnUpdate {
  id?: string;
  createdAt?: string;
  dueDate?: string;
  feedback: IFeedback;
  mentor: {
    firstname: string;
    lastname: string;
    picture: string;
  };
  note: string;
  status: string;
  title: string
}
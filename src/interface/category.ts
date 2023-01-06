interface ICategoryPayload {
  id: string;
  name: string;
}

export interface ICategory {
  payload: ICategoryPayload[];
}

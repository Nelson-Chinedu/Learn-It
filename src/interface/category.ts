interface ICategoryPayload {
  id: string;
  name: string;
  resource: {
    id: string;
    name: string;
    url: string;
  }[];
}

export interface ICategory {
  payload: ICategoryPayload[];
}

export interface IAddCategoryResponse {
  status: number;
  message: string;
  payload: {
    id: string;
    name: string;
    profile: string;
  };
}

export interface IAddCategoryProp {
  userId: string;
  payload: {
    name: string;
  };
}

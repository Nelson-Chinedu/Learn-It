export interface IResource {
  payload: {
    id: string;
    name: string;
    url: string;
  }[];
}

export interface IAddResourceResponse {
  status: number;
  message: string;
  payload: {
    name: string;
    url: string;
    profile: string;
  };
}

export interface IAddResourceProp {
  userId: string;
  payload: {
    categoryId: string;
    name: string;
    url: string;
  };
}

export interface IGetResourceProp {
  userId: string;
  categoryId: string;
}

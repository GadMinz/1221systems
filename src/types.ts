export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
}

export interface IBreadcrumb {
  name: string;
  link: string;
}

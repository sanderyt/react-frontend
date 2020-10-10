export type UserData = {
  name: string;
  email: string;
  password: string;
};

export type Project = {
  title: string;
  description: string;
  images: FileList;
  tools: string;
  url: string;
};

export type Error = { type: string; message: string };

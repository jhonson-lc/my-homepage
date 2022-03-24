export interface Blog {
  id?: string;
  tags: string;
  name: string;
  createdAt: string;
  slug: string;
  description: string;
}

export interface singleBlog {
  id: string;
  properties: {
    createdAt: any;
    description: any;
    name: any;
    tags: any;
  };
}

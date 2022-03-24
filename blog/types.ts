export interface Blog {
  id?: string;
  tags: string;
  name: string;
  createdAt: string;
  description: string;
}

export interface singleBlog {
  id: string;
  properties: {
    createdAt: any;
    slug: any;
    description: any;
    name: any;
    tags: any;
  };
}

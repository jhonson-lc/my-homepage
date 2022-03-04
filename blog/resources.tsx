import { Client } from "@notionhq/client";

export default {
  list: async (): Promise<any> => {
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });
    const databaseId: any = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  },
};

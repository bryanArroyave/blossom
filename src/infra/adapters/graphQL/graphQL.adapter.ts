import { request } from "graphql-request";

export default class GraphQLAdapter {
  async getQuery(url: string, query: string) {
    return await request(url, query);
  }
}

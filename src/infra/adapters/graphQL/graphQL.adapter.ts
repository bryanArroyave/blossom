import { request } from "graphql-request";
import IGraphQl from "../../ports/GraphQl.port";

export default class GraphQLAdapter implements IGraphQl {
  async getQuery<T>(url: string, query: string): Promise<T> {
    return await request(url, query);
  }
}

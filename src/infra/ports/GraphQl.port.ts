export default interface IGraphQl {
  getQuery<T>(url: string, query: string): Promise<T>;
}

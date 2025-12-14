export class AppResponse {
  constructor(
    public payload: string | any,
    public status: number = 200,
    public details?: string,
  ) {
    this.payload = typeof payload === 'string' ? { message: payload } : payload;
  }
}
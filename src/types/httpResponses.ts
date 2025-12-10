export type HttpResponse = {
  message?: string,
  status: number,
}

export type HttpErrorResponse = {
  error: string,
  status: number,
  details?: any,
}
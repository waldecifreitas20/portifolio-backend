async function checkCredentials(req: Request, res: any, next: any) {
  return res.status(401).json({
    error: 'forbidden resource',
    message: 'You are not allowed to access this route'
  });
}

export const AdminMiddlewares = {
  checkCredentials
}
async function checkCredentials(req: any, res: any, next: any) {
  const ADMIN_PASS = `${process.env.ADMIN_PASS}`;
  const pass = `${req.headers.pass}`;

  if (pass === ADMIN_PASS) return next();

  return res.status(401).json({
    error: 'forbidden resource',
    message: 'You are not allowed to access this route',
  });
}

export const AdminMiddlewares = {
  checkCredentials
}
async function create(req: Request, res: any) {
  return res.json({ msg: 'only admim can access this route' });
}

async function remove(req: Request, res: any) {
  return res.json({ msg: 'only admim can access this route' })
}


export default{
  create, remove
}

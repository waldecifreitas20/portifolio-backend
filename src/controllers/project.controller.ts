async function create(req: Request, res: any) {
  return res.json({ msg: "ONLY ADMIN IS ALLOWED TO ACCESS THIS ROUTE" });
}

async function update(req: Request, res: any) {
  return res.json({ msg: "ONLY ADMIN IS ALLOWED TO ACCESS THIS ROUTE" });
}

async function getAll(req: Request, res: any) {
  return res.json({ projects: [] });
}

export default {
  create, update, getAll,
}
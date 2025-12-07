import { log } from "console";
import { Prisma } from "../config/prisma";

export async function testQuery() {
  const technology = await Prisma.technology.create({
    data: {
      id: 55,
      name: 'ReactJS',
      desc: 'Reactjs is a javascript library',
      hexColor: '#4526',
      isBackend: false,
      logoUrl: 'https://www.oficial.com',
      officialWebsite: 'https://www.oficial.com'
    }
  });

  log("TECH CREATED: ", technology);

  Prisma.$disconnect();
}
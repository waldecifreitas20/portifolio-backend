import { AppResponse } from '../../utils/responses';
import { CategoryRepository } from '../repositories/category.repository';
import { MessageRepository } from '../repositories/message.repository';
import { ProjectRepository } from '../repositories/project.repository';
import { SkillRepository } from '../repositories/skill.repository';
import { TechRepository } from '../repositories/tech.repository';


export const clearTableService = async () => {
  const repositories = [
    MessageRepository,
    ProjectRepository,
    CategoryRepository,
    SkillRepository,
    TechRepository,
  ];

  try {
    for (const Repository of repositories) {
      await new Repository().clear();
    }

    return new AppResponse(undefined, 201);
  } catch (error) {
    console.log(error);
    return new AppResponse({ error: 'internal several error' }, 502);
  }
}
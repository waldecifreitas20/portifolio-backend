import { AppResponse } from '../../utils/responses.js';
import { CategoryRepository } from '../repositories/category.repository.js';
import { MessageRepository } from '../repositories/message.repository.js';
import { ProjectRepository } from '../repositories/project.repository.js';
import { SkillRepository } from '../repositories/skill.repository.js';
import { TechRepository } from '../repositories/tech.repository.js';


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
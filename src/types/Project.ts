export interface Project {
  name: string,
  description: string,
  description_en: string,
  repositoryUrl: string,
  deployUrl: string,
  thumbnailUrl: string,
  categoryId: number,
  skills: Array<number>,
  technologies: Array<number>
}
export interface CreateProjectDto {
  name: string,
  description: string,
  repositoryUrl: string,
  deployUrl: string,
  thumbnailUrl: string,
  categoryId: number,
  skills: Array<number>,
  technologies: Array<number>
}
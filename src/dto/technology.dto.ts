export interface TechnologyDto {
  id: string,
  name: string,
  desc: string,
  hexColor: string,
  officialWebsite: string,
  logoUrl: string,
  isBackend: boolean,
}


export interface CreateTechnologyDto {
  name: string,
  desc: string,
  hexColor: string,
  officialWebsite: string,
  logoUrl: string,
  isBackend: boolean,
}
export interface IUserRepository {
  id: string;
  name: string;
  description: string;
  language: string;
  repoUrl: string;
  starsCount: number;
  watchersCount: number;
  forksCount: number;
  updatedAt: string;
  updatedDistance: string;
}

export interface IApiUserRepository {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  updated_at: string;
}

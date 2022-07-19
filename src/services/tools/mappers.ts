import { RepositoryApiData } from "@Services/resources/repository";
import { UserApiData } from "@Services/resources/user";
import DateTools from "@Services/tools/date";

export type UserData = {
  id?: string;
  userName?: string;
  name?: string;
  description?: string;
  avatarUrl?: string;
  profileUrl?: string;
  publicReposCount?: number;
  followersCount?: number;
  createdAt?: string;
  createdDistance?: string;
  file?: string;
};

export type FileData = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  ext?: string;
  formats?: any | null;
  hash?: string;
  height?: any | null;
  mime?: string;
  name?: string;
  previewUrl?: any | null;
  provider?: string;
  provider_metadata?: any | null;
  size?: number;
  updatedAt?: string;
  url?: string;
  width: any | null;
};

const userMapper = (userData: UserApiData): UserData => ({
  id: userData.id,
  userName: userData.login,
  name: userData.name,
  description: userData.bio,
  avatarUrl: userData.avatar_url,
  profileUrl: userData.html_url,
  publicReposCount: userData.public_repos,
  followersCount: userData.followers,
  createdAt: userData.created_at,
  createdDistance: DateTools.dateDistance(userData.created_at),
});

export type RepositoryData = {
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
};

export type SkillDataType = {
  id?: string;
  name?: string;
  star?: string;
  image?: string;
};

const repositoriesMapper = (
  repositories: RepositoryApiData[]
): RepositoryData[] =>
  repositories.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    repoUrl: repo.html_url,
    starsCount: repo.stargazers_count,
    watchersCount: repo.watchers_count,
    forksCount: repo.forks_count,
    updatedAt: repo.updated_at,
    updatedDistance: DateTools.dateDistance(repo.updated_at),
  }));

export default {
  userMapper,
  repositoriesMapper,
};

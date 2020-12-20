import dateService from './date';

import { IUser, IApiUser } from '../../helpers/interfaces/User';
import {
  IUserRepository,
  IApiUserRepository,
} from '../../helpers/interfaces/Repository';

const serializeUserData = (userData: IApiUser): IUser => ({
  id: userData.id,
  userName: userData.login,
  name: userData.name,
  description: userData.bio,
  avatarUrl: userData.avatar_url,
  profileUrl: userData.html_url,
  publicReposCount: userData.public_repos,
  followersCount: userData.followers,
  createdAt: userData.created_at,
  createdDistance: dateService.dateDistance(userData.created_at),
});

const serializeRepositories = (
  repositiores: IApiUserRepository[]
): IUserRepository[] =>
  repositiores.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    repoUrl: repo.html_url,
    starsCount: repo.stargazers_count,
    watchersCount: repo.watchers_count,
    forksCount: repo.forks_count,
    updatedAt: repo.updated_at,
    updatedDistance: dateService.dateDistance(repo.updated_at),
  }));

export default {
  serializeUserData,
  serializeRepositories,
};
import dateService from './date';

const serializeUserData = userData => ({
  id: userData.id,
  userName: userData.login,
  name: userData.name,
  description: userData.bio,
  avatarUrl: userData.avatar_url,
  profileUrl: userData.url,
  publicReposCount: userData.public_repos,
  followersCount: userData.followers,
  createdAt: userData.created_at,
  createdDistance: dateService.dateDistance(userData.created_at),
});

const serializeRepositories = repositiores =>
  repositiores.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    updatedAt: repo.updated_at,
    repoUrl: repo.svn_url,
    updatedDistance: dateService.dateDistance(repo.updated_at),
  }));

export default {
  serializeUserData,
  serializeRepositories,
};

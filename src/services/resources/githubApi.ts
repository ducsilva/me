import axios from 'axios';
import formatDataService from '../tools/formatData';

import ApiUser from '../../helpers/interfaces/ApiUser';
import ApiRepository from '../../helpers/interfaces/ApiRepository';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

interface UserApiResponse {
  data: ApiUser;
}

interface RepositoriesApiResponse {
  data: Array<ApiRepository>;
}

const fetchUserData = async (userName: string) => {
  const response: UserApiResponse = await githubApi.get(`users/${userName}`);
  return formatDataService.serializeUserData(response.data);
};

const fetchRepositories = async (userName: string) => {
  const response: RepositoriesApiResponse = await githubApi.get(
    `users/${userName}/repos`
  );
  return formatDataService.serializeRepositories(response.data);
};

export default {
  fetchRepositories,
  fetchUserData,
};

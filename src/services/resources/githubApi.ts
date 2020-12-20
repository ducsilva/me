import axios from 'axios';
import formatDataService from '../tools/formatData';

import { IApiUser } from '../../helpers/interfaces/User';
import {
  IUserRepository,
  IApiUserRepository,
} from '../../helpers/interfaces/Repository';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

interface UserApiResponse {
  data: IApiUser;
}

interface RepositoriesApiResponse {
  data: IApiUserRepository[];
}

const fetchUserData = async (userName: string) => {
  const response: UserApiResponse = await githubApi.get(`users/${userName}`);
  return formatDataService.serializeUserData(response.data);
};

const fetchRepositories = async (
  userName: string
): Promise<IUserRepository[]> => {
  const response: RepositoriesApiResponse = await githubApi.get(
    `users/${userName}/repos`
  );
  return formatDataService.serializeRepositories(response.data);
};

export default {
  fetchRepositories,
  fetchUserData,
};

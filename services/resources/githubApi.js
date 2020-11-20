import axios from 'axios';
import formatDataService from '../tools/formatData';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

const fetchUserData = async userName => {
  const response = await githubApi.get(`users/${userName}`);
  return formatDataService.serializeUserData(response.data);
};

const fetchRepositories = async userName => {
  const response = await githubApi.get(`users/${userName}/repos`);
  return formatDataService.serializeRepositories(response.data);
};

export default {
  fetchRepositories,
  fetchUserData,
};

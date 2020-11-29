interface ApiRepository {
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

export default ApiRepository;

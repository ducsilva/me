interface Repository {
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

export default Repository;

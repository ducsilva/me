export interface IUser {
  id: string;
  userName: string;
  name: string;
  description: string;
  avatarUrl: string;
  profileUrl: string;
  publicReposCount: number;
  followersCount: number;
  createdAt: string;
  createdDistance: string;
}

export interface IApiUser {
  id: string;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

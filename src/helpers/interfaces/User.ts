interface User {
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

export default User;

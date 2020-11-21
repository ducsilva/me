import { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from './_header';
import Profile from './_profile';

import githubApiService from '../services/resources/githubApi';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  const fetchUserData = async () =>
    await githubApiService.fetchUserData('Lukazovic');

  const fetchUserRepositories = async () =>
    await githubApiService.fetchRepositories('Lukazovic');

  useEffect(() => {
    Promise.all([fetchUserData(), fetchUserRepositories()]).then(
      ([userData, userRepositories]) => {
        setUser(userData);
        setRepositories(userRepositories);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="page">
      <Head>
        <title>Github Projects by Lucas Vieira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Profile
            name={user.name}
            userName={user.userName}
            description={user.description}
            avatarUrl={user.avatarUrl}
            followersCount={user.followersCount}
            publicReposCount={user.publicReposCount}
            profileUrl={user.profileUrl}
            createdDistance={user.createdDistance}
          />
          {console.log({ user, repositories })}
        </div>
      )}
    </div>
  );
}

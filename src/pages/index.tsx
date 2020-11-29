import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';
import Footer from '../components/Footer';

import githubApiService from '../services/resources/githubApi';

import User from '../helpers/interfaces/User';
import Repository from '../helpers/interfaces/Repository';

interface HomeProps {
  repositories: Array<Repository>;
  user: User;
}

const Home: React.FC<HomeProps> = ({ user, repositories }) => {
  return (
    <div className="page">
      <Head>
        <title>Github Profiles by Lucas Vieira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
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
      <Repositories repositories={repositories} />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const DEFAULT_USER_NAME = 'Lukazovic';

  const user = await githubApiService.fetchUserData(DEFAULT_USER_NAME);
  const repositories = await githubApiService.fetchRepositories(
    DEFAULT_USER_NAME
  );

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};

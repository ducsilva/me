import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import ProfileLoading from '../../components/ProfileLoading';
import Repositories from '../../components/Repositories';
import Footer from '../../components/Footer';

import githubApiService from '../../services/resources/githubApi';

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

interface UserProfileProps {
  repositories: Array<Repository>;
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, repositories }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <div className="page">
        <Head>
          <title>Github Profiles by Lucas Vieira</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <ProfileLoading />
      </div>
    );
  }

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

export default UserProfile;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async context => {
  const { userName } = context.params;

  const user = await githubApiService.fetchUserData(userName);
  const repositories = await githubApiService.fetchRepositories(userName);

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};

import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import ProfileLoading from '../../components/ProfileLoading';
import Repositories from '../../components/Repositories';
import Footer from '../../components/Footer';

import githubApiService from '../../services/resources/githubApi';

import User from '../../helpers/interfaces/User';
import Repository from '../../helpers/interfaces/Repository';

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

interface Context {
  params: {
    userName: string;
  };
}

export const getStaticProps: GetStaticProps = async (context: Context) => {
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

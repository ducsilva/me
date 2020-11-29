import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../_header';
import Profile from '../_profile';
import ProfileLoading from '../_profileLoading';
import Repositories from '../_repositories';
import Footer from '../_footer';

import githubApiService from '../../services/resources/githubApi';

function UserProfile({ user, repositories }) {
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
}

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

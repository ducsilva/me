import Head from 'next/head';

import Header from './_header';
import Profile from './_profile';
import Repositories from './_repositories';
import Footer from './_footer';

import githubApiService from '../services/resources/githubApi';

function Home({ user, repositories }) {
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

export default Home;

export const getStaticProps = async () => {
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

import { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../_header';

function Search() {
  const [userName, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = evt => {
    evt.preventDefault();
    router.push(`/profile/${userName}`);
  };

  const handleInputChange = evt => {
    setUsername(evt.target.value);
  };

  return (
    <div className="page">
      <Head>
        <title>Create your Github Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="search">
        <div className="search-wrapper">
          <h1 className="search-title">Create your Own Github Profile</h1>

          <div className="search-description">
            <p>
              You can type your Github Username in the Input bellow and Generate
              your Profile.
            </p>

            <p>
              In your Profile page you will see the main information about your
              Github Profile as well as your Repositories. And you will be able
              to share that profile with your friends.
            </p>
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={handleInputChange}
              placeholder="Github Username"
            />
            <button type="submit" disabled={!userName}>
              Generate Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Search;

export const getStaticProps = async () => ({
  props: {},
});

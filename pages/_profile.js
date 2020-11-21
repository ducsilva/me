const Profile = ({
  name,
  userName,
  description,
  avatarUrl,
  followersCount,
  publicReposCount,
  profileUrl,
  createdDistance,
}) => (
  <main id="profile">
    <div className="wrapper">
      <div className="profile-container default-container ">
        <img src={avatarUrl} alt={name} />
        <h1>{name}</h1>
        <h4>{description}</h4>

        <ul className="profile-info-card">
          <li>
            <p>Username: {userName}</p>
          </li>
          <li>
            <p>Public Repositories: {publicReposCount}</p>
          </li>
          <li>
            <p>Folowers: {followersCount}</p>
          </li>
          <li>
            <p>Created {createdDistance}</p>
          </li>
        </ul>

        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          See more on Github
        </a>
      </div>
    </div>
  </main>
);

export default Profile;

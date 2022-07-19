import { UserData } from "@Services/tools/mappers";
import _ from "lodash";
import Image from "next/image";
import AppDownload from "./AppDownLoad";

type ProfileProps = Omit<UserData, "id" | "createdAt">;

const Profile = ({
  name,
  userName,
  description,
  avatarUrl,
  followersCount,
  publicReposCount,
  profileUrl,
  createdDistance,
  file,
}: ProfileProps) => (
  <main id="profile">
    <div className="wrapper">
      <div className="profile-container default-container ">
        <div className="profile-image-container">
          <Image
            src={avatarUrl || "/assets/avatar/ava.jpeg"}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={avatarUrl || "/assets/avatar/ava.jpeg"}
          />
        </div>
        <h1>{name}</h1>
        <h4>{description}</h4>

        <ul className="profile-info-card">
          <li>
            <p>Username: {userName}</p>
          </li>
        </ul>
        <ul className="profile-info-card">
          {!_.isEmpty(file) && (
            <li>
              <p>
                My CV:{" "}
                <AppDownload
                  fileName={"CV_NGUYEN_MINH_DUC_ENGLISH.pdf"}
                  url={file}
                />
              </p>
            </li>
          )}
          {publicReposCount && (
            <li>
              <p>Public Repositories: {publicReposCount}</p>
            </li>
          )}
          {followersCount && (
            <li>
              <p>Folowers: {followersCount}</p>
            </li>
          )}
          {createdDistance && (
            <li>
              <p>Created {createdDistance}</p>
            </li>
          )}
        </ul>
        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${userName} Github Profile`}
          >
            See more on Github
          </a>
        )}
      </div>
    </div>
  </main>
);

export default Profile;

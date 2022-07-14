import Footer from "@Components/Footer";
import Profile from "@Components/Profile";
import Repositories from "@Components/Repositories";
import { RepositoryData, UserData } from "@Services/tools/mappers";
import BaseTemplate from "@Templates/Base";

export type ProfileTemplateProps = {
  user: UserData;
  repositories: RepositoryData[];
};

const ProfileTemplate = ({ user, repositories }: ProfileTemplateProps) => (
  <BaseTemplate>
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
  </BaseTemplate>
);

export default ProfileTemplate;

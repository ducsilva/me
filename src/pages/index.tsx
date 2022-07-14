import RepositoryResources from "@Services/resources/repository";
import UserResources from "@Services/resources/user";
import ProfileTemplate, { ProfileTemplateProps } from "@Templates/Profile";
import { GetStaticProps } from "next";

const DEFAULT_USER_NAME = "DucSilva";

const HomePage = ({ user, repositories }: ProfileTemplateProps) => (
  <ProfileTemplate user={user} repositories={repositories} />
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data: user } = await UserResources.getUserData(DEFAULT_USER_NAME);
  const { data: repositories } =
    await RepositoryResources.getAllRepositoriesFromUser(DEFAULT_USER_NAME);

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};

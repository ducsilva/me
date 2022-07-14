import RepositoryResources from "@Services/resources/repository";
import UserResources from "@Services/resources/user";
import { fetchAboutDetail } from "@States/user/userSlice";
import ProfileTemplate, { ProfileTemplateProps } from "@Templates/Profile";
import { DEFAULT_USER_NAME } from "@Utils/utils";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomePage = ({ user, repositories }: ProfileTemplateProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchAboutDetail("1"));
  }, []);
  return <ProfileTemplate user={user} repositories={repositories} />;
};

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

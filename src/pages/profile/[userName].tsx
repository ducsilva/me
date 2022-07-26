import Head from "@Components/Head";
import RepositoryResources from "@Services/resources/repository";
import UserResources from "@Services/resources/user";
import ProfileTemplate, { ProfileTemplateProps } from "@Templates/Profile";
import ProfileLoadingTemplate from "@Templates/ProfileLoading";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

const UserProfilePage = ({ user, repositories }: ProfileTemplateProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <ProfileLoadingTemplate />;
  }

  return (
    <>
      <Head />

      <ProfileTemplate user={user} repositories={repositories} />
    </>
  );
};

export default UserProfilePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const userName = context.params.userName as string;

  const { data: user, error: userError } = await UserResources.getUserData(
    userName
  );
  const { data: repositories, error: repositoriesErros } =
    await RepositoryResources.getAllRepositoriesFromUser(userName);

  if (userError || repositoriesErros) {
    return {
      redirect: { destination: "/404" },
      props: {},
    };
  }

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};

import Profile from "@Components/Profile";

const About = ({ user }) => (
  <Profile
    name={user?.attributes?.Me}
    userName={user?.attributes?.Me}
    description={user?.attributes?.Description}
    avatarUrl={
      user?.attributes?.avatar?.data[0]?.attributes?.url
        ? `${
            process.env.NEXT_PUBLIC_URL_MEDIA +
            user?.attributes?.avatar?.data[0]?.attributes?.url
          }`
        : null
    }
    file={user?.attributes?.file?.data[0]?.attributes}
  />
);

export default About;

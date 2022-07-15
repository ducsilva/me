import Profile from "@Components/Profile";

const About = ({ user }) => (
  <Profile
    name={user?.attributes?.Me}
    userName={user?.attributes?.Me}
    description={user?.attributes?.Description}
    avatarUrl={
      user?.attributes?.avatar?.data[0]?.attributes?.url
        ? `${
            process.env.NEXT_PUBLIC_IMAGE_URL +
            user?.attributes?.avatar?.data[0]?.attributes?.url
          }`
        : null
    }
  />
);

export default About;

import Profile from "@Components/Profile";

const About = ({ user }) => (
  <Profile
    name={user?.attributes?.Me || "Duc Nguyen"}
    userName={user?.attributes?.Me || "DucSilva"}
    description={user?.attributes?.Description}
    avatarUrl={user?.attributes?.ava}
  />
);

export default About;

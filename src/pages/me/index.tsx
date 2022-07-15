import About from "@Components/AboutMe";
import Footer from "@Components/Footer";
import Skill from "@Components/Skill";
import { RootState } from "@States/store";
import { fetchAboutDetail } from "@States/user/userSlice";
import BaseTemplate from "@Templates/Base";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AboutMe = () => {
  const { user } = useSelector((state: RootState) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchAboutDetail("1"));
  }, []);

  return (
    <BaseTemplate>
      <About user={user} />
      <Skill skills={user?.attributes?.skills || []} />
      <Footer />
    </BaseTemplate>
  );
};

export default AboutMe;

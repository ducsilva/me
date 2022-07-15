import AboutMe from "@Pages/me";
import { fetchAboutDetail } from "@States/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchAboutDetail("1"));
  }, []);
  return <AboutMe />;
};

export default HomePage;

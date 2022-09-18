// @ts-nocheck
import About from "@Components/AboutMe";
import Footer from "@Components/Footer";
import PDFPreview from "@Components/PDFPreview";
import { RootState } from "@States/store";
import { fetchAboutDetail } from "@States/user/userSlice";
import BaseTemplate from "@Templates/Base";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state?.user);

  useEffect(() => {
    dispatch(fetchAboutDetail("1"));
  }, []);

  return (
    <BaseTemplate>
      <About user={user} />
      <PDFPreview document={user?.attributes?.cv} />
      <Footer />
    </BaseTemplate>
  );
};

export default AboutMe;

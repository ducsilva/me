// @ts-nocheck
import About from "@Components/AboutMe";
import Footer from "@Components/Footer";
import PDFPreview from "@Components/PDFPreview";
import { RootState } from "@States/store";
import BaseTemplate from "@Templates/Base";
import { useDispatch, useSelector } from "react-redux";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state?.user);

  return (
    <BaseTemplate>
      <About user={user} />
      <PDFPreview
        document={
          "https://drive.google.com/file/d/1jJD35bN_V1J3BQWWp0rA9CaF7dJkMyaC/view?usp=sharing"
        }
      />
      <Footer />
    </BaseTemplate>
  );
};

export default AboutMe;

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import useDarkMode from "use-dark-mode";

const ToggleContainer = styled.div`
  background: ${({ theme }) =>
    theme
      ? "linear-gradient(#091236, #1E215D)"
      : "linear-gradient(#39598A, #79D7ED)"};
  border: 2px solid ${({ theme }) => (theme ? "#6B8096" : "#FFF")};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 3rem;
  height: 2rem;
`;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <ToggleContainer onClick={darkMode.toggle} theme={darkMode.value}>
      {darkMode.value ? (
        <Image src={"/assets/icons/moon.png"} width={20} height={20} />
      ) : (
        <Image src={"/assets/icons/sun.png"} width={20} height={20} />
      )}
    </ToggleContainer>
  );
};

export default DarkModeToggle;

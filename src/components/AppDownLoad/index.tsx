import Link from "next/link";
import styled from "styled-components";

const FileStyled = styled(Link)`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

type AppDownloadProps = {
  fileName?: string;
  url?: string;
};

const AppDownload = ({ fileName, url }: AppDownloadProps) => {
  return (
    <FileStyled href={url} passHref>
      <a target="_blank" rel="noopener noreferrer">
        {fileName}
      </a>
    </FileStyled>
  );
};

export default AppDownload;

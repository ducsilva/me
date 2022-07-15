import FileSaver from "file-saver";
import styled from "styled-components";

const FileStyled = styled.div`
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
  const saveFile = () => {
    FileSaver.saveAs(process.env.NEXT_PUBLIC_URL_MEDIA + url, fileName);
  };
  return <FileStyled onClick={() => saveFile()}>{fileName}</FileStyled>;
};

export default AppDownload;

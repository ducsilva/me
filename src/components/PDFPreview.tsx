import { generateGoogleLink } from "@Utils/utils";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const PdfPreview = ({ document }: any) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (document) {
      let data = generateGoogleLink(document, "preview");
      setUrl(data);
    }
  }, [document]);

  return (
    <div className="container text-center pt-4">
      {url && (
        <iframe src={url} width="500" height="600" allow="autoplay"></iframe>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(PdfPreview), { ssr: false });

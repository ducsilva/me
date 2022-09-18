export const DEFAULT_USER_NAME = "DucSilva";

export const generateGoogleLink = (url = "", type = "view") => {
  let resultUrl = "";
  if (url) {
    // get last index /
    let index = url.lastIndexOf("/") + 1;
    // slice string
    let newUrl = url.slice(0, index);
    resultUrl = newUrl + "" + `${type ? type : "preview"}`;
    return resultUrl;
  }
};

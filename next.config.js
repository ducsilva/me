const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
});
module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: [
      "avatars.githubusercontent.com",
      "avatars0.githubusercontent.com",
      "avatars1.githubusercontent.com",
      "avatars2.githubusercontent.com",
      "avatars3.githubusercontent.com",
      "avatars4.githubusercontent.com",
      "avatars5.githubusercontent.com",
    ],
  },
};

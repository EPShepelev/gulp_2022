import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};

const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const path = require("path");

const package = require("./package");
const widgetName = package.name;
const widgetVersion = package.version;
const testProjectFolder = package.paths.testProjectFolder;

 module.exports = {
    entry: {
        [widgetName]: [ "core-js/es/promise", `./src/${widgetName}/widget/${widgetName}.js` ]
    },
    output: {
        path: path.resolve(__dirname, "dist/tmp/src"),
        filename: `${widgetName}/widget/[name].js`,
        chunkFilename: `${widgetName}/widget/${widgetName}[id].js`,
        libraryTarget: "amd",
        publicPath: "widgets/"
    },
    devtool: false,
    mode: "production",
    externals: [ /^mxui\/|^mendix\/|^dojo\/|^dijit\// ],
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: "dist/tmp" }),
        new CopyWebpackPlugin([ {context: "src", from: "**/*.xml", debug: true} ], { copyUnmodified: true }),
        new CopyWebpackPlugin([ {context: "src/assets", from: "**/*", debug: true} ], { copyUnmodified: true }),
        new ZipPlugin({ path: `../../${widgetVersion}`, filename: widgetName, extension: "mpk" }),
        new CopyWebpackPlugin([ {from: path.resolve(__dirname, "dist", widgetVersion), to: path.resolve(__dirname, testProjectFolder, "widgets"), debug: true} ], { copyUnmodified: true }),
        new CopyWebpackPlugin([ {from: path.resolve(__dirname, "dist/tmp/src"), to: path.resolve(__dirname, testProjectFolder, "deployment/web/widgets"), debug: true} ], { copyUnmodified: true })
    ]
};

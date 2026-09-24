const unityBasePath = '/Build';

export const unityBuildConfig = {
  loaderUrl: `${unityBasePath}/Web-build.loader.js`,
  dataUrl: `${unityBasePath}/Web-build.data.unityweb`,
  frameworkUrl: `${unityBasePath}/Web-build.framework.js.unityweb`,
  codeUrl: `${unityBasePath}/Web-build.wasm.unityweb`,
  streamingAssetsUrl: '/StreamingAssets',
};

const reactAppRewireBuildDev = require('react-app-rewire-build-dev');

const options = {
    outputPath : "wwwroot"
};

module.exports = function override(config, env) {
  if (env === 'production') {
    config.devtool = false;
  }
  return reactAppRewireBuildDev(config, env, options);
  //return config;
};

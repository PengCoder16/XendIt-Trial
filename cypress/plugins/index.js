const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const  { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const  { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const plugin = async (
  on,
  config
) => {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
};

module.exports = plugin;
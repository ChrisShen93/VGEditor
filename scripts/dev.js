const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const portfinder = require('portfinder');
const getConfig = require('./webpack.config');

runDev();

async function runDev() {
  const port = await portfinder.getPortPromise({ port: 3000 });
  const config = getConfig({ prod: false, devServer: { port } });
  const compiler = webpack(config);

  const devOptions = {
    ...config.devServer,
  };

  const server = new DevServer(compiler, devOptions);

  server.listen(devOptions.port, devOptions.host, (err) => {
    if (err) {
      throw err;
    }
  });
}

const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const portfinder = require('portfinder');
const getConfig = require('./webpack.config');

runDev();

async function runDev() {
  const compiler = webpack(getConfig({ prod: false }));

  const server = new DevServer(compiler);

  const port = await portfinder.getPortPromise({ port: 3000 });
  console.log(port);

  const devOptions = {
    host: '0.0.0.0',
    port,
  };

  server.listen(devOptions.port, devOptions.host, (err) => {
    if (err) {
      throw err;
    }
  });
}

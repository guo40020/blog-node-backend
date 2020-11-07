import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1604325747021_3300";

  // add your egg config in here
  config.middleware = [];

  config.cors = {
    origin: '*',
    allowMethods: "GET,POST,OPTION"
  }

  config.jwt = {
    secret: "fuckyou"
  }

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'fuckpassword',
      db: 0
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // turn off csrf
  const noCsrf = {
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...noCsrf,
  };
};

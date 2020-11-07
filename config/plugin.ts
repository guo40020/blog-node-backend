import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  redis: {
    enable: true,
    package: "egg-redis"
  }
};

export default plugin;

import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    sequelize: {
      dialect: "mysql",
      host: "127.0.0.1",
      port: 3306,
      database: "blog_dev",
      username: "root",
      password: "",
    },
  };
  return config;
};

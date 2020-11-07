import { Application } from "egg";

module.exports = (app: Application) => {
  const { STRING } = app.Sequelize
  app.model.define("Users", {
    password: STRING,
  })
}

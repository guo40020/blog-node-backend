import { Application } from "egg";

module.exports = (app: Application) => {
  const { STRING } = app.Sequelize
  const User = app.model.define("Users", {
    password: STRING,
  })

  return User
}

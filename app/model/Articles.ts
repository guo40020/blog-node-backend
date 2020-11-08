import { Application } from "egg";

export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Article = app.model.define("articles", {
    id: { type: STRING, primaryKey: true },
    title: STRING,
    description: STRING,
    tags: STRING,
    content: STRING,
    dateTime: INTEGER,
  });

  return Article;
};

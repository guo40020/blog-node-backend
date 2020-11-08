import { Service } from "egg";
import { nanoid } from 'nanoid';

class AddPost extends Service {
  public async addPost({ title, description, content, tags }) {
    const { ctx } = this;
    await ctx.model.Articles.create({
      id: nanoid(15),
      title,
      description,
      content,
      tags
    });
  }
}

module.exports = AddPost

import { Service } from "egg";

class UpdatePost extends Service {
  public async updatePost({id, title, description, content, tags}) {
    const { ctx } = this;
    const result = await ctx.model.Articles.update({
      title,
      description,
      content,
      tags
    }, {
      where: {
        id
      }
    });
    return result;
  }
}

module.exports = UpdatePost;
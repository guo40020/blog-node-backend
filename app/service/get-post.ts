import { Service } from "egg";

class GetPost extends Service {
  public async getPost({ id }) {
    const { ctx } = this;
    return await ctx.model.Articles.findOne({
      where: {
        id
      }
    })
  }
}

module.exports = GetPost;
import { Service } from "egg";

class GetPost extends Service {
  public async getPosts({ page }) {
    const { ctx } = this;
    return await ctx.model.Articles.findAll({
      offset: (page - 1) * 15, limit: 15
    });
  }
}

module.exports = GetPost;
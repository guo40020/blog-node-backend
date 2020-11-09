import { Service } from "egg";

class GetPost extends Service {
  public async getPosts({ page }) {
    const { ctx } = this;
    return await ctx.model.Articles.findAll(page ? {
      offset: (page - 1) * 15, limit: 15
    } : undefined);
  }
}

module.exports = GetPost;

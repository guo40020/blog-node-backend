import { Controller } from "egg";

class GetPostController extends Controller {
  public async getPost() {
    const { ctx } = this;
    try {
      const post = await ctx.service.getPost.getPost(ctx.request.body);
      ctx.response.body = {
        success: true,
        ...post.dataValues
      };
    } catch (e) {
      ctx.response.body = {
        success: false,
        message: e.toString()
      }
      ctx.status = 500;
    }
  }
}

module.exports = GetPostController;

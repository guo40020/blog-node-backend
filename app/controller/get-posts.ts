import { Controller } from "egg";

class GetPostsController extends Controller {
  public async getPosts() {
    const { ctx } = this;
    try {
      const posts = await ctx.service.getPosts.getPosts(ctx.request.queries)
      ctx.response.body = {
        success: true,
        posts,
      };
    } catch (e) {
      ctx.response.body = {
        success: false,
        message: e.toString()
      };
      ctx.status = 500;
    }
  }
}

module.exports = GetPostsController;

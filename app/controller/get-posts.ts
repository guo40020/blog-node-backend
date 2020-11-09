import { Controller } from "egg";

class GetPostsController extends Controller {
  public async getPosts() {
    const { ctx } = this;
    ctx.response.body = {posts: await ctx.service.getPosts.getPosts(ctx.request.queries)};
  }
}

module.exports = GetPostsController;

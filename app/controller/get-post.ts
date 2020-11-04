import { Controller } from "egg";

class GetPostController extends Controller {
  public async getPost() {
    const { ctx } = this;
    ctx.response.body = await ctx.service.getPost.getPost(ctx.request.body);
  }
}

module.exports = GetPostController;
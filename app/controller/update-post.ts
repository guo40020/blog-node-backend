import { Controller } from "egg";

class UpdatePostController extends Controller {
  public async updatePost() {
    const { ctx } = this;
    const auth = ctx.service.auth.auth(ctx.request.headers);
    if (!auth) {
      ctx.response.body = {
        success: false,
        message: 'Not Authorized'
      };
      return;
    }
    const result = await ctx.service.updatePost.updatePost(ctx.request.body);
    ctx.response.body = {
      success: result == 1 ? true : false
    }
  }
}

module.exports = UpdatePostController;
import { Controller } from "egg";

class AddPostController extends Controller {
  public async addPost() {
    const { ctx } = this;
    const auth = await ctx.service.auth.auth(ctx.request.headers);
    if (!auth) {
      ctx.response.status = 403;
      ctx.response.body = { success: false, message: 'Not Authorized' }
      return
    }

    try {
      await ctx.service.addPost.addPost(ctx.request.body)
      ctx.response.body = { success: true }
    } catch (e) {
      ctx.response.body = { success: false, message: e }
    }
  }
}

module.exports = AddPostController;
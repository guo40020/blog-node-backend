import { Controller } from "egg";

class DeletePostController extends Controller {
  public async deletePost() {
    const { ctx } = this;
    const auth = await ctx.service.auth.auth(ctx.request.headers);
    if (!auth) {
      ctx.response.status = 403;
      ctx.response.body = {
        success: false,
        message: 'Not Authorized'
      }
      return;
    }
    try {
      const result = await <Promise<number>>ctx.service.deletePost.deletePost(ctx.request.body);
      if (result == 1) {
        ctx.response.body = {
          success: true,
        }
      } else {
        ctx.response.body = {
          success: false,
        }
      }

    } catch (e) {
      ctx.response.body = {
        success: false,
        message: e.toString(),
      }
    }
    
  }
}

module.exports = DeletePostController;
import { Controller } from "egg";

class UploadImageController extends Controller {
  public async uploadImage() {
    const { ctx } = this;
    const result = await ctx.service.uploadImage.uploadImage();
    if (result.success) {
      ctx.response.body = { success: true, url: result.filename }
    } else {
      ctx.response.body = { success: false, message: result.message }
      ctx.status = 500
    }
  }
}

module.exports = UploadImageController;

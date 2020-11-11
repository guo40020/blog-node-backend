import { Controller } from "egg";

class UploadImageController extends Controller {
  public async uploadImage() {
    const { ctx } = this;
    const filename = await ctx.service.uploadImage.uploadImage();
    ctx.response.body = {success: true, url: filename}
  }
}

module.exports = UploadImageController;

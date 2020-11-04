import { Controller } from "egg";

class MockGetPostController extends Controller {
  public async getPost() {
    const { ctx } = this;
    ctx.response.body = await ctx.service.mockGetPost.getPost(ctx.request.body);
  }
}

module.exports = MockGetPostController;

import { Controller } from "egg";

class MockGetPostsController extends Controller {
  public async getPosts() {
    const { ctx } = this;
    ctx.response.body = await ctx.service.mockGetPosts.getPosts();
  }
}

module.exports = MockGetPostsController;

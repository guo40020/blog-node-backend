import { Controller } from "egg";

class GetAllIdsController extends Controller {
  public async getIds() {
    const { ctx } = this;
    ctx.response.body = { ids: await ctx.service.getAllIds.getIds() };
  }
}

module.exports = GetAllIdsController;

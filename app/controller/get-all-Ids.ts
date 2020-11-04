import { Controller } from "egg";

class GetAllIdsController extends Controller {
  public async getIds() {
    const { ctx } = this;
    const ids = await ctx.service.getAllIds.getIds();
    const idList: any[] = [];
    for (const id of ids) {
      idList.push(id.id)
    }
    ctx.response.body = { ids: idList };
  }
}

module.exports = GetAllIdsController;

import { Service } from "egg";

class GetAllIds extends Service {
  public async getIds() {
    const { ctx } = this;
    return await ctx.model.Articles.findAll({
      attributes: ["id"],
    });
  }
}

module.exports = GetAllIds;

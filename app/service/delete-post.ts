import { Service } from "egg";

class DeletePost extends Service {
  public async deletePost({id}) {
    const { ctx } = this;
    return await ctx.model.Articles.destroy({
      where: {
        id
      }
    })
  }
}

module.exports = DeletePost;
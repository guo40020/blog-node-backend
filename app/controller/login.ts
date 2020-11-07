import { Controller } from "egg";

class LoginController extends Controller {
  public async login() {
    const { ctx } = this;
    const result = await ctx.service.login.login(ctx.request.body);
    const success = result !== null;
    ctx.response.body = {
      success,
      token: result
    }
  }
}

module.exports = LoginController;

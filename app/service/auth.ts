import { Service } from "egg";

class Auth extends Service {
  public async auth({ token }) {
    const { app } = this;
    const data = await app.redis.exists(token);
    if (data) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Auth;
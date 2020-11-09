import { Service } from "egg";
import * as moment from 'moment';

class Auth extends Service {
  public async auth({ token }) {
    const { app } = this;
    const { loginId } = <any>app.jwt.verify(token, app.config.jwt.secret)
    const data = await app.redis.exists(loginId);
    await app.redis.set(token, 1, 'EX', moment.duration(7, 'days').asSeconds())
    if (data) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Auth;

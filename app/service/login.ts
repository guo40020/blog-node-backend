import { Service } from "egg";
import { nanoid } from 'nanoid';
import * as moment from 'moment';
  
export default class Login extends Service {
  public async login({ password }) {
    const { ctx, app } = this;
    
    const user = await ctx.model.Users.findOne({
      where: {
        password
      }
    });
    if (user == null) {
      return null
    } else {
      const loginId = nanoid(64);
      const expire = moment().add({ days: 7 });
      app.redis.set('id', loginId, 'EX', moment.duration(7, 'days').seconds())
      const token = app.jwt.sign({
        loginId,
        expire
      }, app.config.jwt.secret);
      return token;
    }
  }
}
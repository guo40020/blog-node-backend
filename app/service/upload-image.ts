import { Service } from "egg";
import { nanoid } from 'nanoid';
const fs = require('fs')

class UploadImage extends Service {
  public async uploadImage() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = `${nanoid(30)}.${stream.filename.split('.').pop()}`
    const w = fs.createWriteStream(`./user-content/${filename}`);
    stream.pipe(w);
    try {
      await new Promise((resolve, reject) => {
      w.on('finish', resolve)
      w.on('error', reject)
      })
    } catch (e) {
      return { success: false, message: e.toString() }
    }
    return { success: true, filename };
  }
}

module.exports = UploadImage;

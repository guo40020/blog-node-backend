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
    await new Promise((resolve) => {
      w.on('finish', resolve)
    })
    return filename;
  }
}

module.exports = UploadImage;

import { pseudoRandomBytes } from "crypto";
import { diskStorage } from "multer";
import { extname, join } from "path";

export const getStorage = (pathName: string)=>diskStorage({
    destination: join(__dirname, '..', `${process.env.MEDIA_PATH}/${pathName}`),
    filename: function (req, file, cb) {
      pseudoRandomBytes(16, function (err, raw) {
        cb(null, raw.toString('hex') + Date.now() + extname(file.originalname));
      });
    }
 
  })
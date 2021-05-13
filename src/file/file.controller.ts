import { Controller, Logger, Post,Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { getStorage } from "src/utils";
@Controller('files')
export class FileController{
    private logger : Logger = new Logger(FileController.name)

    @Post('image/khidmaty')
    @UseInterceptors(FileInterceptor('file',{preservePath:true,storage:getStorage('images/khidmaty')}))
    uploadImageKhidmaty(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        console.log(file);
    }
    @Post('image/khidmaty')
    @UseInterceptors(FileInterceptor('file',{preservePath:true,storage:getStorage('images/ospc')}))
    uploadImageOSPC(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        console.log(file);
    }

}
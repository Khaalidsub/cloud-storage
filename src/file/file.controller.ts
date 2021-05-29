import { Controller, Logger, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { getStorage } from "src/utils";
@Controller('files')
export class FileController{
    private logger : Logger = new Logger(FileController.name)

    @Post('image/khidmaty')
    @UseInterceptors(FileInterceptor('file',{preservePath:true,storage:getStorage('images/khidmaty')}))
    uploadImageKhidmaty(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        return file.filename
    }
    @Post('document/khidmaty')
    @UseInterceptors(FileInterceptor('file',{preservePath:true,storage:getStorage('documents/khidmaty')}))
    uploadKhidmatyDocument(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        return file.filename
    }

    @Post('image/ospc')
    @UseInterceptors(FileInterceptor('file',{preservePath:true,storage:getStorage('images/ospc')}))
    uploadImageOSPC(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        return file.filename
    }
    @Post('many/ospc')
    @UseInterceptors(FileInterceptor('files',{preservePath:true,storage:getStorage('many/ospc')}))
    uploadManyOSCP(@UploadedFiles() files:Array<Express.Multer.File>){
        this.logger.log('Files has been uploaded....')
        return files
    }

    @Post('document/ospc')
    @UseInterceptors(FileInterceptor('file',{preservePath:true,storage:getStorage('documents/ospc')}))
    uploadOSPCDocument(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        return file.filename
    }

}
import { Controller, Logger, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('files')
export class FileController{
    private logger : Logger = new Logger(FileController.name)

    @Post('image')
    @UseInterceptors(FileInterceptor('file',{dest:'./images'}))
    uploadImage(@UploadedFile() file:Express.Multer.File){
        this.logger.log('File has been uploaded....')
        console.log(file);
        
    }

}
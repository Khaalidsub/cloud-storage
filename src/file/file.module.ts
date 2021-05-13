import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import { FileController } from './file.controller';
import {pseudoRandomBytes} from 'crypto';
import {extname, join} from 'path';
const mime = require('mime');


@Module({
  imports: [

  ],
    controllers:[FileController]
})
export class FileModule {}

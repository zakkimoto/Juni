import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  imports: [PicturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

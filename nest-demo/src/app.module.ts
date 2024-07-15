import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { CatsTController } from './cats-t/cats-t.controller';
import { CatsControllerT } from './cats/cats.controllerT';
import { CatsService } from './cats/cats.service';

/* 
应用程序的根模块。
*/

@Module({
  imports: [],
  controllers: [AppController, CatsController,CatsControllerT, AdminController, CatsTController],
  providers: [AppService, CatsService],
})
export class AppModule {}

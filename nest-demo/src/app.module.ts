import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { CatsTController } from './cats-t/cats-t.controller';

/* 
应用程序的根模块。
*/

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminController, CatsTController],
  providers: [AppService],
})
export class AppModule {}

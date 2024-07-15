import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


/* 
带有单个路由的基本控制器示例。 这里没有路径 默认是根路径 /
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

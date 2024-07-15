import { Controller, Get } from '@nestjs/common';


/* 
@Controller 装饰器可以接受一个 host 选项，以要求传入请求的 HTTP 主机匹配某个特定值。
*/


@Controller({ path: 'admin', host: 'localhost' })
export class AdminController {
    @Get()
    index(): string {
        return 'Admin page';
    }
}

import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

/* 操作响应的第二种方法是使用类库特有的响应对象(Response)。为了注入特定的响应对象，我们需要使用 @Res() 装饰器。 */


// 直接操作底层的response对象

@Controller('cats-t')
export class CatsTController {
    @Post()
    create(@Res() res: Response) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).json([]);
    }



    //在上面的示例中，你失去与依赖于 Nest 标准响应处理的 Nest 功能
    // （例如，拦截器（Interceptors） 和 @HttpCode()/@Header() 装饰器）的兼容性。
    // 要解决此问题，可以将 passthrough 选项设置为 true，如下所示：


    @Get()
    findAllT(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }

}

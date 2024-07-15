import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param,Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

/* 
nest g controller cats // 使用 CLI 创建控制器
*/

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }



    @Get('findOne')
    findOneT(): string {
        return 'This action returns a cat';
    }


    /* Request */
    @Get('req')
    findAllWithReq(@Req() request: Request): string {
        return 'This action returns all cats,with request!';
    }


    @Post()
    @Header('Cache-Control', 'none')//要指定自定义响应头，可以使用 @header() 装饰器或类库特有的响应对象
    @HttpCode(204) // 默认情况下，响应的状态码总是默认为 200，除了 POST 请求（默认响应状态码为 201），我们可以通过在处理函数外添加 @HttpCode（...） 装饰器来轻松更改此行为。
    create(): string {
        return 'This action adds a new cat';
    }



    // @Redirect() 装饰器有两个可选参数，url 和 statusCode。 如果省略，则 statusCode 默认为 302
    // 有时您可能想动态地决定 HTTP 状态代码或重定向 URL。通过从路由处理方法返回一个如下格式的对象：
    //     {
    //     "url": string,
    //         "statusCode": number
    // }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }


    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }



    @Post('createCat')
    async createCat(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat' + `${createCatDto.name}-${createCatDto.age}-${createCatDto.breed}`;
    }



    /* 控制器已经准备就绪，可以使用，但是 Nest 依然不知道 CatsController 是否存在 */

    /* 我们使用 @Module() 装饰器将元数据附加到模块类中，现在，Nest 可以轻松反射（reflect）出哪些控制器（controller）必须被安装。 */

    /* 需要在app.module.ts 中导入 CatsModule 的引用 */

    /* 因为这里是用的CLI工具命令创建的controller，所以不需要在app.module.ts中导入CatsController */




    


}

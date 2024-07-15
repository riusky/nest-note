import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

/* 要使用 CLI 创建服务类，只需执行 $ nest g service cats 命令。 */

@Injectable()
export class CatsService {

    private readonly cats: Cat[] = [];

    create(cat: Cat) {
      this.cats.push(cat);
    }
  
    findAll(): Cat[] {
      return this.cats;
    }

}

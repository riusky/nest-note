import { Test, TestingModule } from '@nestjs/testing';
import { CatsTController } from './cats-t.controller';

describe('CatsTController', () => {
  let controller: CatsTController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsTController],
    }).compile();

    controller = module.get<CatsTController>(CatsTController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

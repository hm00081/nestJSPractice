import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

//Decorator Pattern
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get과 Post의 차이: Get은 body를 받을 수 없다??
  // 면접 단골질문!!!!!!
  // Get Post Put Delete 차이, http에 대해 설명해 보시오.
  // Amazon H2
  @Get('/list')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add')
  addUSer(): string {
    return this.appService.addUser();
  }

  @Delete()
  deleteUSer(): string {
    return this.appService.deleteUser();
  }
}

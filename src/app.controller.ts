import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

//Decorator Pattern
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get과 Post의 차이: Get은 body를 받을 수 없다??
  // get방식은 url에 데이터를 붙여 전송하는 반면
  // post방식은 body에 데이터를 넣어 전송함.
  // 면접 단골질문!!!!!!
  // Get Post Put Delete 차이, http에 대해 설명해 보시오.
  //   - GET 방식은 주소 뒤에 쿼리스트링이 그대로 전달되어 보안성이 떨어지고 전송속도는 빠름
  //    -> Get은 주로 웹 브라우저가 웹 서버에 데이터를 요청할 때 사용
  // 보안 별로, 속도는 빠름
  // - POST 방식은 주소가 전달 될 때 인코딩하여 전달되어 보안성이 높지만 전송속도가 느리다
  //    -> Post는 웹 브라우저가 웹 서버에 데이터를 전달하기 위해 사용
  // 보안 좋음, 속도는 느림
  // Amazon SSH??? ssh aws vis
  @Get('/list')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add')
  addUSer(): string {
    return this.appService.addUser();
  }

  @Delete()
  deleteUser(): string {
    return this.appService.deleteUser();
  }
}

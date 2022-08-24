import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addUser(): string {
    //TODO DB연결 이후 사용자 추가
    return 'complete';
  }
  deleteUser(): string {
    return 'delete';
  }
}

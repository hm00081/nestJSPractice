import { Controller, Get, Query } from '@nestjs/common';
import { ReaderService } from '../service/reader.service';

//Decorator Pattern
//Route - 사용자가 요청하는 URL, http method 본기
//Validator 유효하지 않은 값이 나올 경우에 대한 대비.
@Controller('/reader')
export class ReaderController {
  constructor(private readonly readerService: ReaderService) {}

  // Get과 Post의 차이: Get은 body를 받을 수 없다??
  // 면접 단골질문!!!!!!
  // Get Post Put Delete 차이, http에 대해 설명해 보시오.
  // Amazon SSH??? ssh aws vis
  @Get('/get-file')
  async getHello(@Query('path') path: string) {
    // ? 뒤에 위치
    // key=value&key=value&key=value
    // Query
    // Param
    if (!path) {
      // 예외처리를 하지 않으면 서버가 죽을 수 있는 경우가 발생한다.
      return 'path is required';
    }
    return await this.readerService.readFile(path);
  }
  @Get('/get-csv-to-json')
  async getCSVToJson(@Query('path') path: string) {
    return path ? this.readerService.readCSVToJson(path) : 'path is required';
  }
}

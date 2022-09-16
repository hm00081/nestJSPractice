import { Module } from '@nestjs/common';
import { ReaderService } from '../service/reader.service';
import { ReaderController } from '../controller/reader.controller';

//@ = decorate, 상속보다 좀 더 범용적으로 쓸 수 있음.
@Module({
  imports: [],
  controllers: [ReaderController],
  providers: [ReaderService],
})
export class ReaderModule {}

//Build는 src에 작성한 ts를 js로 변환(Transile)
//TODO 면접이나 입사 시 Webpack, Rollup, Vite와 같은 Module Bundler를 사용해 본 경험이 있으신 분.
// Hot Reload??

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // 3000번 포트를 받아들임.
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('server runnning' + 3000);
  const arr = [2, 3, 4, 5];
  const a = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}
bootstrap();

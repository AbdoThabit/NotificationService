import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(AppValidationPipe)
  app.setGlobalPrefix('api/v1');
  const port = process.env.PORT || 3333;
  await app.listen(port);
}
bootstrap();

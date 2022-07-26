import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Bachkatorite')
    .setDescription('The Bachkatorite API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();

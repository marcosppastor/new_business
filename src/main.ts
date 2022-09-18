import 'dotenv/config';
import { AppModule } from './app.module';
import { appConfig } from './configs/app';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalPipes(new ValidationPipe(appConfig.validator));

    // Swagger
    const options = new DocumentBuilder()
        .setTitle('New Business API')
        .setDescription('New Business API description')
        .setVersion('1.0')
        .addTag('new-business')
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document);

    // Start
    await app.listen(appConfig.port, () => {
        console.log(`Server is running on port ${appConfig.port}`);
    });
}

bootstrap();

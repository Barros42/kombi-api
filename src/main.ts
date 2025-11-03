import * as os from 'os';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { raw, json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*', // ou uma lista de domínios específicos
    methods: '*', // permite todos os métodos (GET, POST, etc)
    allowedHeaders: '*', // permite todos os headers
    exposedHeaders: '*', // (opcional) expõe todos os headers da resposta
  });
  const config = new DocumentBuilder()
    .setTitle('Kombi API')
    .setDescription('API da Kombi')
    .setVersion('1.0')
    .addTag('leads')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 3000;
  await app.listen(port);


  const networkInterfaces = os.networkInterfaces();
  const addresses: string[] = [];

  for (const iface of Object.values(networkInterfaces)) {
    if (iface) {
      for (const config of iface) {
        if (config.family === 'IPv4' && !config.internal) {
          addresses.push(config.address);
        }
      }
    }
  }

  console.log(`\n🚐 Kombi API is running!`);

  addresses.forEach((ip) => {
    console.log(`👉 Accessible on: http://${ip}:${port}`);
  });

  console.log(`👉 Local access: http://localhost:${port}\n`);
}
bootstrap();

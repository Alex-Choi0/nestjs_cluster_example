import { NestFactory } from '@nestjs/core';
import { AppClusterService } from './app-cluster.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('NESTJS PORT : ', 3000);
}
// bootstrap(); // 싱글스레드 사용시
AppClusterService.clusterize(bootstrap); // 멀티스레드 사용시(각각의 코어)

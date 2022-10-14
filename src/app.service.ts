import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('getHello');
    // return 'Hello World!!!!';
    return `GET REQUEST Thread ID : ${process.pid}`;
  }
}

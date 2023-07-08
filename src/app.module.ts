import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from './modules/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'add your mongoDB URL here',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

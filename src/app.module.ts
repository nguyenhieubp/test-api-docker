import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
//eLlD6mcZHgu6guqW
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nguyenhieu11ka:eLlD6mcZHgu6guqW@cluster0.mnl9kh4.mongodb.net/?retryWrites=true&w=majority',
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

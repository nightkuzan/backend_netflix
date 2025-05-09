import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowController } from './application/modules/show/show.controller';
import { ShowModule } from './application/modules/show/show.module';

@Module({
  imports: [ShowModule],
  controllers: [AppController, ShowController],
  providers: [AppService],
})
export class AppModule {}

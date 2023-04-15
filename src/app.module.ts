import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { VideoService } from './Video/video.service';
import { AddVideoHandler } from './Video/commands/addVideo.handler';
import { GetDataHandler } from './Video/queries/get-data.handler';
import { VideoEventRepository } from './Video/commands/video-event.repository';
import { VideoAddedHandler } from './Video/events/video.handler';
import { AddFrameHandler } from './Video/commands/addFrame.handler';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    VideoEventRepository,
    VideoService,
    AddVideoHandler,
    AddFrameHandler,
    GetDataHandler,
    VideoAddedHandler,
  ],
})
export class AppModule {}

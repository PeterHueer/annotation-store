import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { FrameAddedEvent, VideoAddedEvent } from './video.event';
import { VideoEventRepository } from '../commands/video-event.repository';

@EventsHandler(VideoAddedEvent)
export class VideoAddedHandler implements IEventHandler<VideoAddedEvent> {
  constructor(private repository: VideoEventRepository) {}

  handle(event: VideoAddedEvent) {
    this.repository.addEvent('add_video', event);
    console.log('VIDEO ADDED EVENT', event);
    // Add video to the reading-database
  }
}

@EventsHandler(FrameAddedEvent)
export class FrameAddedHandler implements IEventHandler<FrameAddedEvent> {
  constructor(private repository: VideoEventRepository) {}
  handle(event: FrameAddedEvent) {
    this.repository.addEvent('add_frame', event);
    console.log('FRAME ADDED EVENT', event);
    // Add frame for video to the reading-database
  }
}

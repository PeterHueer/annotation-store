import { AggregateRoot } from '@nestjs/cqrs';
import { FrameAddedEvent, VideoAddedEvent } from './events/video.event';

export class Video extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  addVideo() {
    this.apply(new VideoAddedEvent(this.id));
  }

  addFrame(frameId: string) {
    this.apply(new FrameAddedEvent(this.id, frameId));
  }
}

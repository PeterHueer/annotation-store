import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { AddVideoCommand } from './commands/addVideoCommand';
import { VideoAddedEvent } from './events/video.event';

@Injectable()
export class VideoService {
  constructor(private commandBus: CommandBus, private eventBus: EventBus) {}

  async addVideo(videoId: string) {
    await this.commandBus.execute(new AddVideoCommand(videoId));
    this.eventBus.publish(new VideoAddedEvent(videoId));
  }
}

import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddVideoCommand } from './addVideoCommand';
import { VideoEventRepository } from './video-event.repository';
import { Video } from '../video.model';

@CommandHandler(AddVideoCommand)
export class AddVideoHandler implements ICommandHandler<AddVideoCommand> {
  constructor(
    private repository: VideoEventRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddVideoCommand) {
    console.log('COMMAND2', command);
    const { videoId, type } = command;
    const VideoModel = this.publisher.mergeClassContext(Video);
    const video = new VideoModel(videoId);
    video.addVideo();
    video.commit();
  }
}

import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddFrameCommand } from './addVideoCommand';
import { VideoEventRepository } from './video-event.repository';
import { Video } from '../video.model';

@CommandHandler(AddFrameCommand)
export class AddFrameHandler implements ICommandHandler<AddFrameCommand> {
  constructor(
    private repository: VideoEventRepository,
    private publisher: EventPublisher,
  ) {}

  async execute(command: AddFrameCommand) {
    console.log('COMMAND2', command);
    const { frameId, videoId } = command;

    // const video = Read video from repository (rollup)

    /**
     *     video.addFrame(frameId);
     *     video.commit();
     */
  }
}

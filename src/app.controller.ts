import { Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  AddFrameCommand,
  AddVideoCommand,
} from './Video/commands/addVideoCommand';
import { GetDataQuery } from './Video/queries/get-data.handler';

@Controller()
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('video/:videoId')
  async addVideo(@Param('videoId') id: string) {
    return this.commandBus.execute(new AddVideoCommand(id));
  }

  @Post('video/:videoId/:frameId')
  async addFrame(
    @Param('videoId') videoId: string,
    @Param('frameId') frameId: string,
  ) {
    return this.commandBus.execute(new AddFrameCommand(videoId, frameId));
  }

  @Get()
  async findAll() {
    return this.queryBus.execute(new GetDataQuery());
  }
}

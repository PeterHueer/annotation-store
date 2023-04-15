import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { VideoEventRepository } from '../commands/video-event.repository';

export class GetDataQuery {}

@QueryHandler(GetDataQuery)
export class GetDataHandler implements IQueryHandler<GetDataQuery> {
  constructor(private readonly repository: VideoEventRepository) {}

  async execute(query: GetDataQuery) {
    console.log('execute query');
    return this.repository.getEvents();
  }
}

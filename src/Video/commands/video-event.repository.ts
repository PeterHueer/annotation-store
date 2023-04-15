import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export interface Event {
  id: string;
  type: string;
  data: any;
}

@Injectable()
export class VideoEventRepository {
  private events: Event[] = [];

  public addEvent<T>(type: string, data: T): T {
    const id = uuid();
    const event = { id, type, data };
    this.events.push(event);
    return data;
  }

  public getEvents(): Event[] {
    return this.events;
  }
}

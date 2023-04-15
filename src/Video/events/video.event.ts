export class VideoAddedEvent {
  constructor(public readonly videoId: string) {}
}

export class FrameAddedEvent {
  constructor(
    public readonly videoId: string,
    public readonly frameId: string,
  ) {}
}

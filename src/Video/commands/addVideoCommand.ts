export class AddVideoCommand {
  public type = 'add_video';
  constructor(public readonly videoId: string) {}
}

export class AddFrameCommand {
  public type = 'add_frame';
  constructor(
    public readonly videoId: string,
    public readonly frameId: string,
  ) {}
}

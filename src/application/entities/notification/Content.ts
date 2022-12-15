export class Content {
  private readonly content: string;
  static create: any;

  private validateContent(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentValid = this.validateContent(content);

    if (!isContentValid) {
      throw new Error('Invalid content');
    }

    this.content = content;
  }

  public get value(): string {
    return this.content;
  }
}

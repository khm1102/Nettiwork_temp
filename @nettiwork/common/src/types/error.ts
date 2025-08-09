export class CommonError extends Error {
  messageId: string = "";

  constructor(messageId: string) {
    super();
    this.messageId = messageId;
  }
}

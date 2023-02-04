import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationAttributes {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Notification {
  private _id: string;
  private attributes: NotificationAttributes;

  constructor(
    attributes: Replace<
      NotificationAttributes,
      {
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.attributes = {
      ...attributes,
      createdAt: attributes.createdAt ?? new Date(),
      updatedAt: attributes.updatedAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set content(content: Content) {
    this.attributes.content = content;
  }

  public get content(): Content {
    return this.attributes.content;
  }

  public set category(category: string) {
    this.attributes.category = category;
  }

  public get category(): string {
    return this.attributes.category;
  }

  public read(): void {
    this.attributes.readAt = new Date();
  }

  public unread(): void {
    this.attributes.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.attributes.readAt;
  }

  public set canceledAt(canceledAt: Date | null | undefined) {
    this.attributes.canceledAt = canceledAt;
  }

  public cancel() {
    this.attributes.canceledAt = new Date();
  }

  public get createdAt(): Date {
    return this.attributes.createdAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.attributes.updatedAt = updatedAt;
  }

  public get updatedAt(): Date {
    return this.attributes.updatedAt;
  }

  public set recipientId(recipientId: string) {
    this.attributes.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.attributes.recipientId;
  }
}

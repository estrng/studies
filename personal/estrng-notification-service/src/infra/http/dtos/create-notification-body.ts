import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

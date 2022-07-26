import { Matches, MaxLength, MinLength } from 'class-validator';

export default class User {
  email: string;
  firstName: string;
  lastName: string;
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
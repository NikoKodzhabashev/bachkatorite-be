import User from './user.dto';

export default class CreateEmployeeUserDTO extends User {
  experience: number;
  description: string;
  priceList: string[];
  availability: string[];
}

import CreateClientUserDTO from './create-client.dto';

export default class CreateEmployeeUserDTO extends CreateClientUserDTO {
  experience: number;
  description: string;
  priceList: string[];
  availability: string[];
}

import { Body, Controller, Post } from '@nestjs/common';
import CreateClientUserDTO from './dto/create-client.dto';
import CreateEmployeeUserDTO from './dto/create-employee.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/client')
  createClientUser(@Body() user: CreateClientUserDTO) {
    this.userService.createClientUser(user);
  }

  @Post('/employee')
  createEmployeeUser(@Body() user: CreateEmployeeUserDTO) {
    this.userService.createEmployeeUser(user);
  }
}

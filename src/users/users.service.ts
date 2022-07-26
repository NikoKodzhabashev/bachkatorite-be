import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client.service';
import CreateClientUserDTO from './dto/create-client.dto';
import CreateEmployeeUserDTO from './dto/create-employee.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(username: string): Promise<undefined> {
    return undefined;
  }

  async createClientUser(user: CreateClientUserDTO) {
    await this._createClientUser(user);
  }

  async createEmployeeUser(user: CreateEmployeeUserDTO) {
    const newUser = await this._createClientUser(user);

    await this.prismaService.employee.create({
      data: {
        description: user.description,
        experience: user.experience,
        availability: user.availability,
        priceList: user.priceList,
        user: {
          connect: { id: newUser.id },
        },
      },
    });
  }
  private async _createClientUser(user: CreateClientUserDTO) {
    const hashedPassword = await bcrypt.hash(
      user.password,
      Number(process.env.SALT),
    );
    const newUser = this.prismaService.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: hashedPassword,
      },
    });

    return newUser;
  }
}

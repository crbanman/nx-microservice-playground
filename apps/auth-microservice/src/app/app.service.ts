import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '@nx-microservice-playground/shared/dto';
import { User } from '@nx-microservice-playground/shared/entities';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User | null {
    return this.usersRepository.findOne(id);
  }
}

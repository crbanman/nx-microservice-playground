import { Injectable } from '@nestjs/common';
import { User } from '@nx-microservice-playground/shared/entities';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  save(user: User): void {
    this.users.push({ ...user, id: this.users.length + 1 });
  }

  findOne(id: number): User | null {
    return this.users.find((user) => user.id === id) ?? null;
  }
}

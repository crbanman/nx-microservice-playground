import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@nx-microservice-playground/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user_created')
  handleUserCreated(@Payload(ValidationPipe) data: CreateUserDto) {
    this.appService.createUser(data);
  }
}

// src/modules/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = []; // Assume um array para simplificar

  getAllUsers(): User[] {
    return this.users;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [];

  create(body: any) {
    const newUser = { id: Date.now().toString(), ...body };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  update(id: string, body: any) {
    const user = this.users.find(u => u.id === id);
    if (user) {
      Object.assign(user, body);
      return user;
    }
    return null;
  }

  remove(id: string) {
    const index = this.users.findIndex(u => u.id === id);
    if (index > -1) {
      return this.users.splice(index, 1);
    }
    return null;
  }
}
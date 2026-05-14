import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(body: any) {
    return {
      message: 'Usuario registrado exitosamente',
      user: body,
    };
  }

  login(body: any) {
    return {
      message: 'Usuario autenticado',
      token: 'jwt_token_aqui',
      user: body,
    };
  }

  logout(body: any) {
    return {
      message: 'Sesión cerrada',
    };
  }
}
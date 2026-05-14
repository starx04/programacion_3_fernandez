import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHeath(): any {
    return {
      "service": "blog service api",
      "version":"0.0.1",
      "date":new Date()
    };
  }
  createProducto(): any {
    return {
      "message": "Producto creado exitosamente",
      "producto": {
        "id": 1,
        "nombre": "Cafetera",
        "categoria":"electrodomestico",
        "precio": 19.99,
        "creadoEn": new Date()
      }
    };
  }
}

import { Injectable } from '@nestjs/common';
import { ProductoDto } from './product.dto';
import { find } from 'rxjs/internal/operators/find';

@Injectable()
export class AppService {
  private productos: ProductoDto[] = [
    { id: 1, 
      name: 'Laptop', 
      price: 10.99, 
      stock: 100 },

     { id: 2, 
      name: 'Mouse', 
      price: 10.99, 
      stock: 100 }, 
  ];

  getHealth(): any {
    return {
      "service":"blog service api",
      "version":"1.0.0",
      "date": new Date()
    };
  }

  createProducto(producto: ProductoDto): ProductoDto {
    const newProducto = {
      id: Math.random(), 
      ...producto
    }
    this.productos.push(newProducto);
    return {
      "id": newProducto.id,
      "name": newProducto.name,
      "price": newProducto.price,
      "stock": newProducto.stock
    };
  }  

  findAll(): ProductoDto[] {
    return this.productos;
  }

  findById(id: string): ProductoDto {
    return this.productos!
        .find(producto => producto.id === Number(id))!;
  }

  update(id: string, updateProductoDto: ProductoDto): any {
    const producto:ProductoDto = this.productos!
        .find(producto => producto.id === Number(id))!;
    if(!producto) {
      return;
}
    Object.assign(producto, updateProductoDto)
    return producto;
  }

  delete(id: string): any {
    const index = this.productos!
        .findIndex(producto => producto.id === Number(id))!;
    if(index === -1) {
      return;
    }
    const deletedProducto = this.productos[index];
    this.productos.splice(index, 1);
    return deletedProducto;
  }    

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura) / 2;
    return {
    "base": data.base,
    "altura": data.altura,
    "areaTriangulo": area,
    };
  }
}

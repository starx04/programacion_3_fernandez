import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [
  {
    id: 1,
    name: "Lavadora",
    categorie: "Electrodomestico",
    price: 10.99,
    stock: 100
  },
   {
    id: 2,
    name: "Camara",
    categorie: "Tecnologia",
    price: 19.99,
    stock: 50
  }
];

  getHeath(): any {
    return {
      "service": "blog service api",
      "version":"0.0.1",
      "date":new Date()
    };
  }
  createProduct(product: ProductDto): any {
    const newProduct: ProductDto = {
      id: Math.random(), 
      ...product       
    };
    this.products.push(newProduct);
    return {
      "message": "Producto creado exitosamente",
      "id": product.id,
      "name": product.name,
      "categorie": product.categorie,
      "price": product.price,
      "stock": product.stock 
    };
    
    
  }
  findAll(): ProductDto[] {
      return this.products;
    }
  findAllById(id: string): ProductDto | undefined {
      return this.products.find(product => product.id === Number(id));
    }
}

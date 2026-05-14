import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }
  @Post("/products")
  createProduct(@Body() product: ProductDto): any {
    return this.appService.createProduct(product);
  }
  @Get("/products")
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }
  @Get("/products/:id")
  findAllById(@Param('id') id: string): ProductDto | undefined {
    return this.appService.findAllById(id);
  }  
}

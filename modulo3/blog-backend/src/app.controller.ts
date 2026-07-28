import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

   @Post("/productos")
  createProducto(@Body() producto: ProductoDto): ProductoDto {
    return this.appService.createProducto(producto);
  }

  @Get("/productos")
  findAll(): ProductoDto[] {
    return this.appService.findAll();
  }

  @Get("/productos/:id")
  findBYId(@Param('id') id: string): ProductoDto {
    return this.appService.findById(id);
  }

  @Put("/productos/:id")
  update(@Param('id') id: string,
  @Body() updateProductoDto: ProductoDto): any {
    return this.appService.update(id, updateProductoDto);
  }

  @Delete("/productos/:id")
  delete(@Param('id') id: string): ProductoDto {
    return this.appService.delete(id);
  }

  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
  return this.appService.areaTriangulo(data);
  }
}

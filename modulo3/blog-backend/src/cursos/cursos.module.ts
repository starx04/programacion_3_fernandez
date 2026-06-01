import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosService } from './cursos.service';
import { CursosController } from './cusos.controller';
import { Cursos } from './cursos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cursos])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}

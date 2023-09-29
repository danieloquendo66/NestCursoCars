import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): object[] {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): object {
    console.log({ id });
    const car = this.carsService.findOneById(id - 1);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      body,
    };
  }
  @Patch(':id')
  UpdateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      body,
    };
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'DELETE',
      id,
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateteCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  @Patch(':id')
  UpdateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateteCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}

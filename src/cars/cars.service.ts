import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateteCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A4',
    },
    {
      id: uuid(),
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
  ];

  findAllCars(): Car[] {
    return this.cars;
  }
  findOneById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateteCarDto): Car {
    const car = this.findOneById(id);
    const index = this.cars.indexOf(car);
    this.cars[index] = {
      ...car,
      ...updateCarDto,
      id,
    };
    return this.cars[index];
  }

  delete(id: string): void {
    const car = this.findOneById(id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    const index = this.cars.indexOf(car);
    console.log({ index, car });
    this.cars.splice(index, 1);
  }
}

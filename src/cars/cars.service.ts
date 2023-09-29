import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: object[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: 4,
      brand: 'Honda',
      model: 'Civic',
    },
  ];

  findAllCars(): object[] {
    return this.cars;
  }
  findOneById(id: number): object {
    return this.cars[id];
  }
}

import { Module } from '@nestjs/common';
import {
  GetCurrentGpsDataUseCaseToken,
  GpsDataRepositoryToken,
  SaveCurrentGpsDataUseCaseToken,
} from './gps.token';
import SaveCurrentGpsDataUseCase from './usecase/save.current.gps.data.usecase';
import GpsController from './external/controller/gps.controller';
import { GpsDataRepository } from 'src/common/external/repositories/gps.repository';
import GetCurrentGpsDataUseCase from './usecase/get.current.gps.data.usecase';

@Module({
  controllers: [GpsController],
  providers: [
    {
      provide: SaveCurrentGpsDataUseCaseToken,
      useClass: SaveCurrentGpsDataUseCase,
    },
    {
      provide: GetCurrentGpsDataUseCaseToken,
      useClass: GetCurrentGpsDataUseCase,
    },
    {
      provide: GpsDataRepositoryToken,
      useClass: GpsDataRepository,
    },
  ],
})
export class GpsModule {}

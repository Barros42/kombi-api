import { Module } from '@nestjs/common';
import {
  GpsDataRepositoryToken,
  SaveCurrentGpsDataUseCaseToken,
} from './gps.token';
import { HttpModule } from '@nestjs/axios';
import SaveCurrentGpsDataUseCase from './usecase/save.current.gps.data.usecase';
import GpsController from './external/controller/gps.controller';
import { GpsDataRepository } from 'src/common/external/repositories/gps.repository';

@Module({
  imports: [HttpModule],
  controllers: [GpsController],
  providers: [
    {
      provide: SaveCurrentGpsDataUseCaseToken,
      useClass: SaveCurrentGpsDataUseCase,
    },
    {
      provide: GpsDataRepositoryToken,
      useClass: GpsDataRepository,
    }
  ],
})
export class GpsModule { }

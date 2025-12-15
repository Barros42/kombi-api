import { Module } from '@nestjs/common';
import { TelemetryController } from './external/telemetry.controller';
import { TelemetryDataRepository } from 'src/common/external/repositories/telemetry.repository';
import {
  GetCurrentTelemetryDataUseCaseToken,
  SaveCurrentTelemetryDataUseCaseToken,
  TelemetryDataRepositoryToken,
} from './telemetry.tokens';
import SaveCurrentTelemetryDataUseCase from './usecase/save.current.telemetry.data.usecase';
import GetCurrentTelemetryDataUseCase from './usecase/get.current.telemetry.data.usecase';

@Module({
  controllers: [TelemetryController],
  providers: [
    {
      provide: SaveCurrentTelemetryDataUseCaseToken,
      useClass: SaveCurrentTelemetryDataUseCase,
    },
    {
      provide: GetCurrentTelemetryDataUseCaseToken,
      useClass: GetCurrentTelemetryDataUseCase,
    },
    {
      provide: TelemetryDataRepositoryToken,
      useClass: TelemetryDataRepository,
    },
  ],
})
export class TelemetryModule {}

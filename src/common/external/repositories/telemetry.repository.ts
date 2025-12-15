import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from 'src/common/external/repositories/base.repository';
import { GpsData } from 'src/common/domain/entities/gps.data.entity';
import { TelemetryData } from 'src/common/domain/entities/telemetry.entity';
import ITelemetryDataRepository from 'src/common/interfaces/telemetry.data.repository.interface';

@Injectable()
export class TelemetryDataRepository
  extends BaseRepository<TelemetryData>
  implements ITelemetryDataRepository
{
  constructor(dataSource: DataSource) {
    super(dataSource, TelemetryData);
  }
}

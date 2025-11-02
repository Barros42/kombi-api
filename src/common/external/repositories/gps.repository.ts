import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from 'src/common/external/repositories/base.repository';
import { GpsData } from 'src/common/domain/entities/gps.data.entity';
import IGpsDataRepository from 'src/common/interfaces/gps.data.repository.interface';

@Injectable()
export class GpsDataRepository extends BaseRepository<GpsData> implements IGpsDataRepository {
  constructor(dataSource: DataSource) {
    super(dataSource, GpsData);
  }
}

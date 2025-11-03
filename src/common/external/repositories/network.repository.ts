import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from 'src/common/external/repositories/base.repository';
import { NetworkData } from 'src/common/domain/entities/network.data.entity';
import INetworkDataRepository from 'src/common/interfaces/network.data.repository.interface';

@Injectable()
export class NetworkDataRepository
  extends BaseRepository<NetworkData>
  implements INetworkDataRepository
{
  constructor(dataSource: DataSource) {
    super(dataSource, NetworkData);
  }
}

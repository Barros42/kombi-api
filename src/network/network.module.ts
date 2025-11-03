import { Module } from '@nestjs/common';
import NetworkController from './network.controller';
import {
  NetworkDataRepositoryToken,
  SaveCurrentNetworkDataUseCaseToken,
} from './network.tokens';
import SaveCurrentNetworkDataUseCase from './usecases/save.current.network.data.usecase';
import { NetworkDataRepository } from 'src/common/external/repositories/network.repository';

@Module({
  controllers: [NetworkController],
  providers: [
    {
      provide: SaveCurrentNetworkDataUseCaseToken,
      useClass: SaveCurrentNetworkDataUseCase,
    },
    {
      provide: NetworkDataRepositoryToken,
      useClass: NetworkDataRepository,
    },
  ],
})
export class NetworkModule {}

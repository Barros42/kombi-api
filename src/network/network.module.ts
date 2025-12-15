import { Module } from '@nestjs/common';
import NetworkController from './network.controller';
import {
  GetCurrentNetworkDataUseCaseToken,
  NetworkDataRepositoryToken,
  SaveCurrentNetworkDataUseCaseToken,
} from './network.tokens';
import SaveCurrentNetworkDataUseCase from './usecases/save.current.network.data.usecase';
import { NetworkDataRepository } from 'src/common/external/repositories/network.repository';
import GetCurrentNetworkDataUseCase from 'src/gps/usecase/get.current.network.data.usecase';

@Module({
  controllers: [NetworkController],
  providers: [
    {
      provide: SaveCurrentNetworkDataUseCaseToken,
      useClass: SaveCurrentNetworkDataUseCase,
    },
    {
      provide: GetCurrentNetworkDataUseCaseToken,
      useClass: GetCurrentNetworkDataUseCase
    },
    {
      provide: NetworkDataRepositoryToken,
      useClass: NetworkDataRepository,
    },
  ],
})
export class NetworkModule {}

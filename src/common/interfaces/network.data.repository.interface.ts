import { NetworkData } from '../domain/entities/network.data.entity';
import { IBaseRepository } from '../domain/interfaces/repositories/base.repository.interface';

export default interface INetworkDataRepository
  extends IBaseRepository<NetworkData> {}

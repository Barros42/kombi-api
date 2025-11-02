import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';

import SaveCurrentGpsDataUseCaseInput from './dto/input/save.current.gps.data.input';
import SaveCurrentGpsDataUseCaseOutput from './dto/output/save.current.gps.data.output';
import { GpsDataRepositoryToken } from '../gps.token';
import IGpsDataRepository from 'src/common/interfaces/gps.data.repository.interface';

@Injectable()
export default class SaveCurrentGpsDataUseCase
  implements IUseCase<SaveCurrentGpsDataUseCaseInput, SaveCurrentGpsDataUseCaseOutput> {
  private readonly logger = new Logger(SaveCurrentGpsDataUseCase.name);

  constructor(
    @Inject(GpsDataRepositoryToken)
    private readonly gpsDataRepository: IGpsDataRepository,
  ) { }

  async run(
    input: SaveCurrentGpsDataUseCaseInput,
  ): Promise<SaveCurrentGpsDataUseCaseOutput> {
    this.logger.log(`Starting use case with input: ${JSON.stringify(input)}`);
    await this.gpsDataRepository.createEntity(input)
    return Promise.resolve(new SaveCurrentGpsDataUseCaseOutput({ status: 'OK', timestamp: new Date() }));
  }
}

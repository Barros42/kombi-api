import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';

import { GpsDataRepositoryToken } from '../gps.token';
import IGpsDataRepository from 'src/common/interfaces/gps.data.repository.interface';
import GetCurrentGpsDataUseCaseInput from './dto/input/get.current.gps.data.input';
import GetCurrentGpsDataUseCaseOutput from './dto/output/get.current.gps.data.output';

@Injectable()
export default class GetCurrentGpsDataUseCase
  implements
    IUseCase<GetCurrentGpsDataUseCaseInput, GetCurrentGpsDataUseCaseOutput>
{
  private readonly logger = new Logger(GetCurrentGpsDataUseCase.name);

  constructor(
    @Inject(GpsDataRepositoryToken)
    private readonly gpsDataRepository: IGpsDataRepository,
  ) {}

  async run(
    input: GetCurrentGpsDataUseCaseInput,
  ): Promise<GetCurrentGpsDataUseCaseOutput> {
    this.logger.log(`Starting use case with input: ${JSON.stringify(input)}`);

    const existingData = await this.gpsDataRepository.findOne({
      where: { deviceId: input.deviceId },
    });

    if (!existingData) {
      this.logger.log('No existing GPS data found, creating new entry.');
      throw new NotFoundException(
        'GPS data not found for deviceId: ' + input.deviceId,
      );
    }

    return existingData;
  }
}

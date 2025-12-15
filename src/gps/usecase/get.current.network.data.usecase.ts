import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';
import GetCurrentNetworkDataUseCaseInput from './dto/input/get.current.network.data.input';
import GetCurrentNetworkDataUseCaseOutput from './dto/output/get.current.network.data.output';
import { NetworkDataRepositoryToken } from 'src/network/network.tokens';
import INetworkDataRepository from 'src/common/interfaces/network.data.repository.interface';

@Injectable()
export default class GetCurrentNetworkDataUseCase
  implements
    IUseCase<
      GetCurrentNetworkDataUseCaseInput,
      GetCurrentNetworkDataUseCaseOutput
    >
{
  private readonly logger = new Logger(GetCurrentNetworkDataUseCase.name);

  constructor(
    @Inject(NetworkDataRepositoryToken)
    private readonly networkDataRepository: INetworkDataRepository,
  ) {}

  async run(
    input: GetCurrentNetworkDataUseCaseInput,
  ): Promise<GetCurrentNetworkDataUseCaseOutput> {
    this.logger.log(`Starting use case with input: ${JSON.stringify(input)}`);

    const existingData = await this.networkDataRepository.findOne({
      where: { deviceId: input.deviceId },
    });

    if (!existingData) {
      throw new NotFoundException(
        'Network data not found for deviceId: ' + input.deviceId,
      );
    }

    return existingData;
  }
}

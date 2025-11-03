import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';
import { NetworkDataRepositoryToken } from '../network.tokens';
import SaveCurrentNetworkDataUseCaseInput from './dto/input/save.current.network.data.usecase.input';
import SaveCurrentNetworkDataUseCaseOutput from './dto/output/save.current.network.data.usecase.output';
import INetworkDataRepository from 'src/common/interfaces/network.data.repository.interface';

@Injectable()
export default class SaveCurrentNetworkDataUseCase
  implements
    IUseCase<
      SaveCurrentNetworkDataUseCaseInput,
      SaveCurrentNetworkDataUseCaseOutput
    >
{
  private readonly logger = new Logger(SaveCurrentNetworkDataUseCase.name);

  constructor(
    @Inject(NetworkDataRepositoryToken)
    private readonly networkDataRepository: INetworkDataRepository,
  ) {}

  async run(
    input: SaveCurrentNetworkDataUseCaseInput,
  ): Promise<SaveCurrentNetworkDataUseCaseOutput> {
    this.logger.log(`Starting use case with input: ${JSON.stringify(input)}`);

    const existingData = await this.networkDataRepository.findOne({
      where: { deviceId: input.deviceId },
    });

    if (!existingData) {
      this.logger.log('No existing NETWORK data found, creating new entry.');
      await this.networkDataRepository.createEntity(input);
      return new SaveCurrentNetworkDataUseCaseOutput();
    }

    await this.networkDataRepository.updateEntity(existingData.id, input);
    this.logger.log(
      'NETWORK data updated successfully for deviceId: ' + input.deviceId,
    );
    return new SaveCurrentNetworkDataUseCaseOutput();
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Logger,
  Post,
  Headers,
} from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';
import SaveCurrentNetworkDataUseCaseInput from './usecases/dto/input/save.current.network.data.usecase.input';
import SaveCurrentNetworkDataUseCaseOutput from './usecases/dto/output/save.current.network.data.usecase.output';
import { SaveCurrentNetworkDataUseCaseToken } from './network.tokens';
import { NetworkDataInput } from './dto/network.data.input';

@Controller('network')
export default class NetworkController {
  private readonly logger = new Logger(NetworkController.name);

  constructor(
    @Inject(SaveCurrentNetworkDataUseCaseToken)
    private readonly saveCurrentNetworkDataUseCase: IUseCase<
      SaveCurrentNetworkDataUseCaseInput,
      SaveCurrentNetworkDataUseCaseOutput
    >,
  ) { }

  @Post()
  async saveLastData(
    @Body() body: NetworkDataInput,
    @Headers('Kombi-Id') deviceId: string,
  ): Promise<SaveCurrentNetworkDataUseCaseOutput> {
    try {

      if (!deviceId) {
        throw new BadRequestException('Kombi-Id header is required');
      }

      this.logger.log(`Received Network data: ${JSON.stringify(body)}`);
      const useCaseInput =
        SaveCurrentNetworkDataUseCaseInput.fromNetworkDataInput(body, deviceId);
      return await this.saveCurrentNetworkDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

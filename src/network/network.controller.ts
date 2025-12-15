import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Logger,
  Post,
  Headers,
  Get,
} from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';
import SaveCurrentNetworkDataUseCaseInput from './usecases/dto/input/save.current.network.data.usecase.input';
import SaveCurrentNetworkDataUseCaseOutput from './usecases/dto/output/save.current.network.data.usecase.output';
import {
  GetCurrentNetworkDataUseCaseToken,
  SaveCurrentNetworkDataUseCaseToken,
} from './network.tokens';
import { NetworkDataInput } from './dto/network.data.input';
import GetCurrentNetworkDataUseCaseOutput from 'src/gps/usecase/dto/output/get.current.network.data.output';
import GetCurrentNetworkDataUseCaseInput from 'src/gps/usecase/dto/input/get.current.network.data.input';

@Controller('network')
export default class NetworkController {
  private readonly logger = new Logger(NetworkController.name);

  constructor(
    @Inject(SaveCurrentNetworkDataUseCaseToken)
    private readonly saveCurrentNetworkDataUseCase: IUseCase<
      SaveCurrentNetworkDataUseCaseInput,
      SaveCurrentNetworkDataUseCaseOutput
    >,
    @Inject(GetCurrentNetworkDataUseCaseToken)
    private readonly getCurrentNetworkDataUseCase: IUseCase<
      GetCurrentNetworkDataUseCaseInput,
      GetCurrentNetworkDataUseCaseOutput
    >,
  ) {}

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

  @Get()
  async getLastData(
    @Headers('Kombi-Id') deviceId: string,
  ): Promise<GetCurrentNetworkDataUseCaseOutput> {
    try {
      if (!deviceId) {
        throw new BadRequestException('Kombi-Id header is required');
      }

      this.logger.log(`Received request for deviceId: ${deviceId}`);
      const useCaseInput = new GetCurrentNetworkDataUseCaseInput({ deviceId });
      return this.getCurrentNetworkDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Headers,
} from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';

import SaveCurrentGpsDataUseCaseInput from 'src/gps/usecase/dto/input/save.current.gps.data.input';
import SaveCurrentGpsDataUseCaseOutput from 'src/gps/usecase/dto/output/save.current.gps.data.output';
import {
  GetCurrentGpsDataUseCaseToken,
  SaveCurrentGpsDataUseCaseToken,
} from 'src/gps/gps.token';
import { GpsDataInput } from '../dto/gps.data.input';
import GetCurrentGpsDataUseCaseInput from 'src/gps/usecase/dto/input/get.current.gps.data.input';
import GetCurrentGpsDataUseCaseOutput from 'src/gps/usecase/dto/output/get.current.gps.data.output';

@Controller('gps')
export default class GpsController {
  private readonly logger = new Logger(GpsController.name);

  constructor(
    @Inject(SaveCurrentGpsDataUseCaseToken)
    private readonly saveCurrentGpsDataUseCase: IUseCase<
      SaveCurrentGpsDataUseCaseInput,
      SaveCurrentGpsDataUseCaseOutput
    >,

    @Inject(GetCurrentGpsDataUseCaseToken)
    private readonly getCurrentGpsDataUseCase: IUseCase<
      GetCurrentGpsDataUseCaseInput,
      GetCurrentGpsDataUseCaseOutput
    >,
  ) { }

  @Post('last-position')
  async saveLasPosition(
    @Body() body: GpsDataInput,
  ): Promise<SaveCurrentGpsDataUseCaseOutput> {
    try {
      this.logger.log(`Received GPS data: ${JSON.stringify(body)}`);
      const useCaseInput =
        SaveCurrentGpsDataUseCaseInput.fromGpsDataInput(body);
      return this.saveCurrentGpsDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get('last-position')
  async getLastPosition(
    @Headers('Kombi-Id') deviceId: string, // exemplo pegando header específico
  ): Promise<GetCurrentGpsDataUseCaseOutput> {
    try {

      if (!deviceId) {
        throw new BadRequestException('Kombi-Id header is required');
      }

      this.logger.log(`Received request for deviceId: ${deviceId}`);
      const useCaseInput = new GetCurrentGpsDataUseCaseInput({ deviceId });
      return this.getCurrentGpsDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

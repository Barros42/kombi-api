import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Logger,
  Post,
} from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';

import SaveCurrentGpsDataUseCaseInput from 'src/gps/usecase/dto/input/save.current.gps.data.input';
import SaveCurrentGpsDataUseCaseOutput from 'src/gps/usecase/dto/output/save.current.gps.data.output';
import { SaveCurrentGpsDataUseCaseToken } from 'src/gps/gps.token';
import { GpsDataInput } from '../dto/gps.data.input';

@Controller('gps')
export default class GpsController {

  private readonly logger = new Logger(GpsController.name);

  constructor(
    @Inject(SaveCurrentGpsDataUseCaseToken)
    private readonly saveCurrentGpsDataUseCase: IUseCase<
      SaveCurrentGpsDataUseCaseInput,
      SaveCurrentGpsDataUseCaseOutput
    >,
  ) { }


  @Post('last-position')
  async saveLasPosition(
    @Body() body: GpsDataInput,
  ): Promise<SaveCurrentGpsDataUseCaseOutput> {
    try {
      this.logger.log(`Received GPS data: ${JSON.stringify(body)}`);
      const useCaseInput = SaveCurrentGpsDataUseCaseInput.fromGpsDataInput(body)
      return this.saveCurrentGpsDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Headers,
  Logger,
  Inject,
  Get,
} from '@nestjs/common';
import SaveCurrentTelemetryDataUseCaseOutput from '../usecase/dto/output/save.current.telemetry.data.output';
import SaveCurrentTelemetryDataUseCaseInput from '../usecase/dto/input/save.current.telemetry.data.input';
import { TelemetryDataInput } from '../dto/telemetry.data.input';
import { GetCurrentTelemetryDataUseCaseToken, SaveCurrentTelemetryDataUseCaseToken } from '../telemetry.tokens';
import IUseCase from 'src/interface/usecases/IUseCase';
import GetCurrentTelemetryDataUseCaseOutput from '../usecase/dto/output/get.current.telemetry.data.output';
import GetCurrentTelemetryDataUseCaseInput from '../usecase/dto/input/get.current.telemetry.data.input';

@Controller('telemetry')
export class TelemetryController {
  private readonly logger = new Logger(TelemetryController.name);

  constructor(
    @Inject(SaveCurrentTelemetryDataUseCaseToken)
    private readonly saveCurrentTelemetryDataUseCase: IUseCase<
      SaveCurrentTelemetryDataUseCaseInput,
      SaveCurrentTelemetryDataUseCaseOutput
    >,
    @Inject(GetCurrentTelemetryDataUseCaseToken)
    private readonly getCurrentTelemetryDataUseCase: IUseCase<
      GetCurrentTelemetryDataUseCaseInput,
      GetCurrentTelemetryDataUseCaseOutput
    >,
  ) { }

  @Post()
  async saveLastData(
    @Body() body: TelemetryDataInput,
    @Headers('Kombi-Id') deviceId: string,
  ): Promise<SaveCurrentTelemetryDataUseCaseOutput> {
    try {
      if (!deviceId) {
        throw new BadRequestException('Kombi-Id header is required');
      }

      this.logger.log(`Received Telemetry data: ${JSON.stringify(body)}`);
      const useCaseInput =
        SaveCurrentTelemetryDataUseCaseInput.fromTelemetryDataInput(
          body,
          deviceId,
        );
      return await this.saveCurrentTelemetryDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get()
  async getLastData(
    @Headers('Kombi-Id') deviceId: string,
  ): Promise<GetCurrentTelemetryDataUseCaseOutput> {
    try {
      if (!deviceId) {
        throw new BadRequestException('Kombi-Id header is required');
      }

      this.logger.log(`Received request for deviceId: ${deviceId}`);
      const useCaseInput = new GetCurrentTelemetryDataUseCaseInput({
        deviceId,
      });
      return await this.getCurrentTelemetryDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

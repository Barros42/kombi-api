import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';
import { TelemetryDataRepositoryToken } from '../telemetry.tokens';
import GetCurrentTelemetryDataUseCaseOutput from './dto/output/get.current.telemetry.data.output';
import GetCurrentTelemetryDataUseCaseInput from './dto/input/get.current.telemetry.data.input';
import ITelemetryDataRepository from 'src/common/interfaces/telemetry.data.repository.interface';

@Injectable()
export default class GetCurrentTelemetryDataUseCase
  implements
    IUseCase<
      GetCurrentTelemetryDataUseCaseInput,
      GetCurrentTelemetryDataUseCaseOutput
    >
{
  private readonly logger = new Logger(GetCurrentTelemetryDataUseCase.name);

  constructor(
    @Inject(TelemetryDataRepositoryToken)
    private readonly telemetryDataRepository: ITelemetryDataRepository,
  ) {}

  async run(
    input: GetCurrentTelemetryDataUseCaseInput,
  ): Promise<GetCurrentTelemetryDataUseCaseOutput> {
    this.logger.log(`Starting use case with input: ${JSON.stringify(input)}`);

    const existingData = await this.telemetryDataRepository.findOne({
      where: { deviceId: input.deviceId },
    });

    if (!existingData) {
      this.logger.log('No existing TELEMETRY data found, creating new entry.');
      throw new NotFoundException(
        'TELEMETRY data not found for deviceId: ' + input.deviceId,
      );
    }

    return existingData;
  }
}

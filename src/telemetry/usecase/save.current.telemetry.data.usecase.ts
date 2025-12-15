import { Inject, Injectable, Logger } from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';

import SaveCurrentTelemetryDataUseCaseInput from './dto/input/save.current.telemetry.data.input';
import SaveCurrentTelemetryDataUseCaseOutput from './dto/output/save.current.telemetry.data.output';
import { TelemetryDataRepositoryToken } from '../telemetry.tokens';
import ITelemetryDataRepository from 'src/common/interfaces/telemetry.data.repository.interface';

@Injectable()
export default class SaveCurrentTelemetryDataUseCase
  implements
    IUseCase<
      SaveCurrentTelemetryDataUseCaseInput,
      SaveCurrentTelemetryDataUseCaseOutput
    >
{
  private readonly logger = new Logger(SaveCurrentTelemetryDataUseCase.name);

  constructor(
    @Inject(TelemetryDataRepositoryToken)
    private readonly telemetryDataRepository: ITelemetryDataRepository,
  ) {}

  async run(
    input: SaveCurrentTelemetryDataUseCaseInput,
  ): Promise<SaveCurrentTelemetryDataUseCaseOutput> {
    this.logger.log(`Starting use case with input: ${JSON.stringify(input)}`);

    const existingData = await this.telemetryDataRepository.findOne({
      where: { deviceId: input.deviceId },
    });

    if (!existingData) {
      this.logger.log('No existing TELEMETRY data found, creating new entry.');
      await this.telemetryDataRepository.createEntity(input);
      return new SaveCurrentTelemetryDataUseCaseOutput({
        status: 'OK',
        timestamp: new Date(),
      });
    }

    await this.telemetryDataRepository.updateEntity(existingData.id, input);
    this.logger.log(
      'TELEMETRY data updated successfully for deviceId: ' + input.deviceId,
    );
    return new SaveCurrentTelemetryDataUseCaseOutput({
      status: 'OK',
      timestamp: new Date(),
    });
  }
}

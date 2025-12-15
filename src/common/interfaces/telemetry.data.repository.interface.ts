import { TelemetryData } from '../domain/entities/telemetry.entity';
import { IBaseRepository } from '../domain/interfaces/repositories/base.repository.interface';

export default interface ITelemetryDataRepository
  extends IBaseRepository<TelemetryData> {}

import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class TelemetryDataInput {
  @IsInt()
  uptimeSeconds: number;

  @IsInt()
  kernelWarnings: number;

  @IsNumber()
  socTemperatureCelsius: number;

  @IsNumber()
  socTempMaxCelsius: number;

  @IsInt()
  overheatEvents: number;

  @IsNumber()
  cpuUsagePercent: number;

  @IsNumber()
  loadAvg1m: number;

  @IsInt()
  cpuFreqMhz: number;

  @IsInt()
  ramUsedMb: number;

  @IsInt()
  ramTotalMb: number;

  @IsInt()
  swapUsedMb: number;

  @IsInt()
  swapTotalMb: number;

  @IsInt()
  sdFreeMb: number;

  @IsInt()
  sdTotalMb: number;

  @IsNumber()
  sdUsagePercent: number;

  @IsBoolean()
  fsReadonly: boolean;

  @IsInt()
  diskReadBytes: number;

  @IsInt()
  diskWriteBytes: number;

  @IsNumber()
  ioWaitPercent: number;

  @IsBoolean()
  undervoltageDetected: boolean;

  @IsBoolean()
  throttlingDetected: boolean;

  @IsInt()
  throttledFlags: number;

  constructor(obj: Partial<TelemetryDataInput>) {
    Object.assign(this, obj);
  }
}

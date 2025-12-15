import { TelemetryDataInput } from "src/telemetry/dto/telemetry.data.input";

export default class SaveCurrentTelemetryDataUseCaseInput {
  deviceId: string;
  uptimeSeconds: number;
  kernelWarnings: number;
  socTemperatureCelsius: number;
  socTempMaxCelsius: number;
  overheatEvents: number;
  cpuUsagePercent: number;
  loadAvg1m: number;
  cpuFreqMhz: number;
  ramUsedMb: number;
  ramTotalMb: number;
  swapUsedMb: number;
  swapTotalMb: number;
  sdFreeMb: number;
  sdTotalMb: number;
  sdUsagePercent: number;
  fsReadonly: boolean;
  diskReadBytes: number;
  diskWriteBytes: number;
  ioWaitPercent: number;
  undervoltageDetected: boolean;
  throttlingDetected: boolean;
  throttledFlags: number;

  private constructor(props: SaveCurrentTelemetryDataUseCaseInput) {
    Object.assign(this, props);
  }

  static fromTelemetryDataInput(
    input: TelemetryDataInput,
    deviceId: string,
  ): SaveCurrentTelemetryDataUseCaseInput {
    return new SaveCurrentTelemetryDataUseCaseInput({
      deviceId: deviceId,
      uptimeSeconds: input.uptimeSeconds,
      kernelWarnings: input.kernelWarnings,
      socTemperatureCelsius: input.socTemperatureCelsius,
      socTempMaxCelsius: input.socTempMaxCelsius,
      overheatEvents: input.overheatEvents,
      cpuUsagePercent: input.cpuUsagePercent,
      loadAvg1m: input.loadAvg1m,
      cpuFreqMhz: input.cpuFreqMhz,
      ramUsedMb: input.ramUsedMb,
      ramTotalMb: input.ramTotalMb,
      swapUsedMb: input.swapUsedMb,
      swapTotalMb: input.swapTotalMb,
      sdFreeMb: input.sdFreeMb,
      sdTotalMb: input.sdTotalMb,
      sdUsagePercent: input.sdUsagePercent,
      fsReadonly: input.fsReadonly,
      diskReadBytes: input.diskReadBytes,
      diskWriteBytes: input.diskWriteBytes,
      ioWaitPercent: input.ioWaitPercent,
      undervoltageDetected: input.undervoltageDetected,
      throttlingDetected: input.throttlingDetected,
      throttledFlags: input.throttledFlags,
    });
  }
}

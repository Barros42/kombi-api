import { Column, Entity } from 'typeorm';
import { AppEntity } from './app.entity';

@Entity({ name: 'telemetry_data' })
export class TelemetryData extends AppEntity {
  @Column({ name: 'device_id', nullable: false })
  deviceId: string;

  @Column({ name: 'uptime_seconds', type: 'int', nullable: false })
  uptimeSeconds: number;

  @Column({ name: 'kernel_warnings', type: 'int', nullable: false })
  kernelWarnings: number;

  @Column({ name: 'soc_temperature_celsius', type: 'float', nullable: false })
  socTemperatureCelsius: number;

  @Column({ name: 'soc_temp_max_celsius', type: 'float', nullable: false })
  socTempMaxCelsius: number;

  @Column({ name: 'overheat_events', type: 'int', nullable: false })
  overheatEvents: number;

  @Column({ name: 'cpu_usage_percent', type: 'float', nullable: false })
  cpuUsagePercent: number;

  @Column({ name: 'load_avg_1m', type: 'float', nullable: false })
  loadAvg1m: number;

  @Column({ name: 'cpu_freq_mhz', type: 'int', nullable: false })
  cpuFreqMhz: number;

  @Column({ name: 'ram_used_mb', type: 'int', nullable: false })
  ramUsedMb: number;

  @Column({ name: 'ram_total_mb', type: 'int', nullable: false })
  ramTotalMb: number;

  @Column({ name: 'swap_used_mb', type: 'int', nullable: false })
  swapUsedMb: number;

  @Column({ name: 'swap_total_mb', type: 'int', nullable: false })
  swapTotalMb: number;

  @Column({ name: 'sd_free_mb', type: 'int', nullable: false })
  sdFreeMb: number;

  @Column({ name: 'sd_total_mb', type: 'int', nullable: false })
  sdTotalMb: number;

  @Column({ name: 'sd_usage_percent', type: 'float', nullable: false })
  sdUsagePercent: number;

  @Column({ name: 'fs_readonly', type: 'boolean', nullable: false })
  fsReadonly: boolean;

  @Column({ name: 'disk_read_bytes', type: 'bigint', nullable: false })
  diskReadBytes: number;

  @Column({ name: 'disk_write_bytes', type: 'bigint', nullable: false })
  diskWriteBytes: number;

  @Column({ name: 'io_wait_percent', type: 'float', nullable: false })
  ioWaitPercent: number;

  @Column({ name: 'undervoltage_detected', type: 'boolean', nullable: false })
  undervoltageDetected: boolean;

  @Column({ name: 'throttling_detected', type: 'boolean', nullable: false })
  throttlingDetected: boolean;

  @Column({ name: 'throttled_flags', type: 'int', nullable: false })
  throttledFlags: number;
}

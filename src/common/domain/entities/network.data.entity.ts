import { Column, Entity } from 'typeorm';
import { AppEntity } from './app.entity';
@Entity({ name: 'network_data' })
export class NetworkData extends AppEntity {
  @Column({ name: 'device_id', nullable: false })
  deviceId: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'local_ip', nullable: true })
  localIp: string;

  @Column({ name: 'public_ip', nullable: true })
  publicIp: string;

  @Column({ name: 'ssid', nullable: true })
  ssid: string;

  @Column({ name: 'wifi_status', nullable: false, default: false })
  wifiStatus: boolean;

  @Column({ name: 'lte_status', nullable: false, default: false })
  lteStatus: boolean;

  @Column({ name: 'bluetooth_status', nullable: false, default: false })
  bluetoothStatus: boolean;

  @Column({ name: 'wifi_signal_strength', nullable: false })
  wifiSignalStrength: number;
}

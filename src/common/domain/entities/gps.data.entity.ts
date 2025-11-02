import { Column, Entity } from 'typeorm';
import { AppEntity } from './app.entity';
@Entity({ name: 'gps_data' })
export class GpsData extends AppEntity {
  @Column({ name: 'device_id', nullable: false })
  deviceId: string;

  @Column({ name: 'timestamp', nullable: false })
  timestamp: string;

  @Column({ name: 'latitude', nullable: false })
  latitude: string;

  @Column({ name: 'longitude', nullable: false })
  longitude: string;

  @Column({ name: 'altitude', type: 'float', nullable: false })
  altitude: number;

  @Column({ name: 'gps_quality', type: 'int', nullable: false })
  gpsQuality: number;

  @Column({ name: 'date_stamp', nullable: false })
  dateStamp: string;

  @Column({ name: 'status', nullable: false, length: 1 })
  status: string;

  @Column({ name: 'satellites_number', type: 'int', nullable: false })
  numberOfSatellites: number;

  @Column({ name: 'speed', type: 'float', nullable: false })
  speed: number;

}

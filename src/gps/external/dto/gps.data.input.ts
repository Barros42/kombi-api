import { Type } from 'class-transformer';
import { IsString, IsNumber, IsInt, IsDateString, IsIn } from 'class-validator';

export class GpsDataInput {
  @IsString()
  deviceId: string;

  @IsString()
  timestamp: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @Type(() => Number)
  @IsNumber()
  altitude: number;

  @IsInt()
  gpsQuality: number;

  @IsDateString()
  datestamp: string;

  @IsIn(['A', 'V'])
  status: string;

  @IsInt()
  numberOfSatellites: number;

  @Type(() => Number)
  @IsNumber()
  speed: number;
}

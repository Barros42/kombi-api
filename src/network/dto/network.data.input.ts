import { IsString, IsBoolean, IsInt } from 'class-validator';

export class NetworkDataInput {
  @IsBoolean()
  status: boolean;

  @IsString()
  localIp: string;

  @IsString()
  publicIp: string;

  @IsString()
  ssid: string;

  @IsBoolean()
  wifiStatus: boolean;

  @IsBoolean()
  lteStatus: boolean;

  @IsBoolean()
  bluetoothStatus: boolean;

  @IsInt()
  wifiSignalStrength: number;
}

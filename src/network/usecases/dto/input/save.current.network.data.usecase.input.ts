import { NetworkDataInput } from 'src/network/dto/network.data.input';

export default class SaveCurrentNetworkDataUseCaseInput {
  deviceId: string;
  status: boolean;
  localIp: string;
  publicIp: string;
  ssid: string;
  wifiStatus: boolean;
  lteStatus: boolean;
  bluetoothStatus: boolean;
  wifiSignalStrength: number;

  private constructor(props: SaveCurrentNetworkDataUseCaseInput) {
    Object.assign(this, props);
  }

  static fromNetworkDataInput(
    input: NetworkDataInput,
    deviceId: string,
  ): SaveCurrentNetworkDataUseCaseInput {
    return new SaveCurrentNetworkDataUseCaseInput({
      deviceId,
      status: input.status,
      localIp: input.localIp,
      publicIp: input.publicIp,
      ssid: input.ssid,
      wifiStatus: input.wifiStatus,
      lteStatus: input.lteStatus,
      bluetoothStatus: input.bluetoothStatus,
      wifiSignalStrength: input.wifiSignalStrength,
    });
  }
}

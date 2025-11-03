import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Logger,
  Post,
  Headers,
} from '@nestjs/common';
import IUseCase from 'src/interface/usecases/IUseCase';
import SaveCurrentNetworkDataUseCaseInput from './usecases/dto/input/save.current.network.data.usecase.input';
import SaveCurrentNetworkDataUseCaseOutput from './usecases/dto/output/save.current.network.data.usecase.output';
import { SaveCurrentNetworkDataUseCaseToken } from './network.tokens';
import { NetworkDataInput } from './dto/network.data.input';
import * as msgpack from '@ygoe/msgpack';
import * as zlib from 'zlib';

@Controller('network')
export default class NetworkController {
  private readonly logger = new Logger(NetworkController.name);

  constructor(
    @Inject(SaveCurrentNetworkDataUseCaseToken)
    private readonly saveCurrentNetworkDataUseCase: IUseCase<
      SaveCurrentNetworkDataUseCaseInput,
      SaveCurrentNetworkDataUseCaseOutput
    >,
  ) { }

  @Post()
  async saveLastData(
    @Body() body: Buffer,
    @Headers('Kombi-Id') deviceId: string,
  ): Promise<void> {
    try {
      if (!deviceId) {
        throw new BadRequestException('Kombi-Id header is required');
      }

      const decompressed = zlib.gunzipSync(body);
      const values = msgpack.decode(decompressed) as [
        boolean,
        string,
        string,
        string,
        boolean,
        boolean,
        boolean,
        number,
      ];

      const [
        status,
        localIp,
        publicIp,
        ssid,
        wifiStatus,
        lteStatus,
        bluetoothStatus,
        wifiSignalStrength,
      ] = values;

      const networkData = new NetworkDataInput({
        status,
        localIp,
        publicIp,
        ssid,
        wifiStatus,
        lteStatus,
        bluetoothStatus,
        wifiSignalStrength,
      });

      this.logger.log('Decoded values:', values);

      this.logger.log(`Received Network data: ${JSON.stringify(body)}`);
      const useCaseInput =
        SaveCurrentNetworkDataUseCaseInput.fromNetworkDataInput(
          networkData,
          deviceId,
        );
      await this.saveCurrentNetworkDataUseCase.run(useCaseInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

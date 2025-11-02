import { GpsDataInput } from "src/gps/external/dto/gps.data.input";

export default class SaveCurrentGpsDataUseCaseInput {
  deviceId: string;
  timestamp: string;
  latitude: string
  longitude: string;
  altitude: number;
  gpsQuality: number
  dateStamp: string;
  status: string;
  numberOfSatellites: number;
  speed: number;

  private constructor(props: SaveCurrentGpsDataUseCaseInput) {
    Object.assign(this, props);
  }

  static fromGpsDataInput(input: GpsDataInput): SaveCurrentGpsDataUseCaseInput {
    return new SaveCurrentGpsDataUseCaseInput({
      timestamp: input.timestamp,
      latitude: input.latitude,
      longitude: input.longitude,
      altitude: input.altitude,
      gpsQuality: input.gpsQuality,
      dateStamp: input.datestamp,
      status: input.status,
      numberOfSatellites: input.numberOfSatellites,
      speed: input.speed,
      deviceId: input.deviceId,
    });
  }
}

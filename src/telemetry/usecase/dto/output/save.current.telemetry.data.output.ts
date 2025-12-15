export default class SaveCurrentTelemetryDataUseCaseOutput {
  status: string
  timestamp: Date
  constructor(data: SaveCurrentTelemetryDataUseCaseOutput) {
    this.status = data.status;
    this.timestamp = data.timestamp;
  }
}



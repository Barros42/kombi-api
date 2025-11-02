export default class SaveCurrentGpsDataUseCaseOutput {
  status: string
  timestamp: Date
  constructor(data: SaveCurrentGpsDataUseCaseOutput) {
    this.status = data.status;
    this.timestamp = data.timestamp;
  }
}

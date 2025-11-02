import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { getDataSourceOptions } from './ormconfig';

const configService = new ConfigService();
export const AppDataSource = new DataSource(
  getDataSourceOptions(configService),
);

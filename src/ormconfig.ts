// ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

export const getTypeOrmConfig = (
  config: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: config.get<string>('DATABASE_HOST'),
  port: Number(config.get<string>('DATABASE_PORT')),
  username: config.get<string>('DATABASE_USERNAME'),
  password: config.get<string>('DATABASE_PASSWORD'),
  database: config.get<string>('DATABASE_NAME'),
  entities: [join(__dirname, 'common/domain/entities/*.{ts,js}')],
  migrations: [join(__dirname, 'migrations/*.{ts,js}')],
  synchronize: false,
  logging: true,
});

export const getDataSourceOptions = (
  config: ConfigService,
): DataSourceOptions => ({
  type: 'mysql',
  host: config.get<string>('DATABASE_HOST'),
  port: Number(config.get<string>('DATABASE_PORT')),
  username: config.get<string>('DATABASE_USERNAME'),
  password: config.get<string>('DATABASE_PASSWORD'),
  database: config.get<string>('DATABASE_NAME'),
  entities: [join(__dirname, 'common/domain/entities/*.{ts,js}')],
  migrations: [join(__dirname, 'migrations/*.{ts,js}')],
  synchronize: false,
  logging: true,
});

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getTypeOrmConfig } from './ormconfig';

import { ScheduleModule } from '@nestjs/schedule';
import { GpsModule } from './gps/gps.module';
import { NetworkModule } from './network/network.module';

@Module({
  imports: [
    NetworkModule,
    GpsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, GpsModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => getTypeOrmConfig(config),
    }),
    NetworkModule,
  ],
  controllers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { databaseConfig } from './configs/database';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ScheduleModule.forRoot(),
        TypeOrmModule.forRoot(databaseConfig),
    ],
    controllers: [
        //
    ],
    providers: [
        //
    ],
})
export class AppModule {
    constructor(
        private dataSource: DataSource
    ) {/** */ }
}

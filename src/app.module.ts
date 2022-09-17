import { Module } from '@nestjs/common';

import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { databaseConfig } from './configs/database';
import { UsersModule } from './modules/users/users.module';
import { PlansModule } from './modules/plans/plans.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ScheduleModule.forRoot(),
        TypeOrmModule.forRoot(databaseConfig),
        UsersModule,
        PlansModule,
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

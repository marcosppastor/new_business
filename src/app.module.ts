import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { databaseConfig } from './configs/database';


@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(databaseConfig),
    ],
    controllers: [
        //
    ],
    providers: [
        //
    ],
})
export class AppModule {/*  */ }

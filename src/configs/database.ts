import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const databaseConfig: TypeOrmModuleOptions = {
    type: <any>process.env.DB_CONNECTION || 'postgres',
    host: <any>process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: <any>process.env.DB_USERNAME || 'postgres',
    password: <any>process.env.DB_PASSWORD || 'postgres',
    database: <any>process.env.DB_DATABASE || 'new_business',
    schema: <any>process.env.DB_SCHEMA || 'public',
    synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
    retryAttempts: parseInt(process.env.DB_RETRY_ATTEMPTS) || 3,
    retryDelay: parseInt(process.env.DB_RETRY_DELAY) || 1000,
    logging: process.env.DB_LOGGING === 'true' || false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}']
}
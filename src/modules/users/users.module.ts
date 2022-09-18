import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UserSubscriber } from './subscribers/user.subscriber';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService,
        UserSubscriber
    ]
})
export class UsersModule {
    //
}

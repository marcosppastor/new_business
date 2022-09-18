import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {
        //
    }

    async isUnique(column: string, value: string): Promise<boolean> {
        const data: User = await this.findOneBy({ [column]: value });
        if (data) return false;
        return true;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        // isUnique by email
        const emailExists: boolean = await this.isUnique('email', createUserDto.email);
        if (!emailExists) throw new HttpException('This email is already being used', HttpStatus.BAD_REQUEST);
        const user: User = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOneBy({ id });
    }

    findOneBy(criteria: any): Promise<User> {
        return this.usersRepository.findOneBy(criteria);
    }

    update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        // return this.usersRepository.update(id, updateUserDto);
        return this.usersRepository.save({
            ...updateUserDto, id,
        });
    }

    remove(id: string) {
        return this.usersRepository.delete(id);
    }
}

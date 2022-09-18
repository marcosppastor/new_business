import { DeleteResult } from 'typeorm';
import { User } from "./entities/user.entity";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
        //
    }

    @Post()
    @ApiOperation({ summary: 'Store a new user' })
    @ApiOkResponse({ description: 'User created successfully' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ summary: 'Search all users' })
    @ApiOkResponse({ description: 'List of all users' })
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Search a user by id' })
    @ApiOkResponse({ description: 'User found' })
    @ApiNotFoundResponse({ description: 'User not found' })
    async findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a user by id' })
    @ApiOkResponse({ description: 'User updated successfully' })
    @ApiNotFoundResponse({ description: 'User not found' })
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user by id' })
    @ApiOkResponse({ description: 'User deleted successfully' })
    @ApiNoContentResponse({ description: 'User deleted successfully' })
    @ApiNotFoundResponse({ description: 'User not found' })
    async remove(@Param("id") id: string): Promise<DeleteResult> {
        return this.usersService.remove(id);
    }
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    // name
    @ApiProperty({
        description: 'Username',
        example: 'John Doe',
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    // email
    @ApiProperty({
        description: 'E-mail',
        example: 'johndoe@mail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    email: string;

    // password
    @ApiProperty({
        description: 'Password',
        example: '123456'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(255)
    password: string;
}

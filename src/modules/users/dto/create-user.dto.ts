import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    // name
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'John Doe',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    // email
    @ApiProperty({
        description: 'E-mail do usuário',
        example: 'johndoe@mail.com'
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    // password
    @ApiProperty({
        description: 'Senha do usuário',
        example: '123456'
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}

import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export abstract class EntityBase {
    // uuid
    @ApiProperty({
        description: 'Identificador único do registro',
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // createdAt
    @ApiProperty({
        description: 'Data de criação do registro',
    })
    @CreateDateColumn()
    createdAt: Date;

    // updatedAt
    @ApiProperty({
        description: 'Data de atualização do registro',
    })
    @UpdateDateColumn()
    updatedAt: Date;
}
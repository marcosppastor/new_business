import { hashSync } from "bcrypt";
import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity } from "typeorm";
import { EntityBase } from "src/utils/entity-base.util";
// import { UserSubscriber } from "../subscribers/user.subscriber";

@Entity({ schema: 'public', name: 'users' })
export class User extends EntityBase {
    // name
    @ApiProperty({
        description: 'Username',
        example: 'John Doe',
    })
    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    // email
    @ApiProperty({
        description: 'E-mail',
        example: 'johndoe@mail.com'
    })
    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    email: string;

    // password
    @ApiProperty({
        description: 'Password',
        example: '123456'
    })
    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, Number(process.env.HASH_SALT || 10));
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return this.password === hashSync(unencryptedPassword, Number(process.env.HASH_SALT || 10));
    }

    toJSON(): User {
        const user = Object.assign({}, this);
        delete user.password;
        return user;
    }
}
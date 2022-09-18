import { hashSync } from "bcrypt";
import { User } from "../entities/user.entity";
import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(private readonly dataSource: DataSource) {
        this.dataSource.subscribers.push(this);
    }

    listenTo() {
        return User;
    }

    async beforeInsert(event: InsertEvent<User>) {
        const { password } = event.entity;
        // use bcrypt to hash the password
        event.entity.password = await hashSync(password, Number(process.env.HASH_SALT || 10));
        console.log('beforeInsert', event.entity);
    }

    async afterInsert(event: InsertEvent<User>) {
        // send email to user
        console.log('afterInsert', event.entity);
    }

    async beforeUpdate(event: UpdateEvent<User>) {
        const { password } = event.entity;
        // use bcrypt to hash the password
        event.entity.password = await hashSync(password, Number(process.env.HASH_SALT || 10));
        console.log('beforeUpdate', event.entity);
    }
}

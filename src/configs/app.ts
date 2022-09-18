// import { ValidationError } from "class-validator";
// import { BadRequestException } from "@nestjs/common";

export const appConfig = {
    port: process.env.PORT || 3000,
    validator: {
        whitelist: true,
        // forbidNonWhitelisted: true,
        // transform: true,
        // transformOptions: {
        //     enableImplicitConversion: true,
        // },
        // disableErrorMessages: false,
        // exceptionFactory: (errors) => {
        //     const messages = errors.map((error: ValidationError) => {
        //         const constraints = Object.values(error.constraints);
        //         return constraints[0];
        //     });

        //     return new BadRequestException(messages);
        // }
    }
};
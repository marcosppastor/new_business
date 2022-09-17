export const appConfig = {
    port: process.env.PORT || 3000,
    validator: {
        whitelist: true,
        // forbidNonWhitelisted: true,
        // transform: true,
        // transformOptions: {
        //     enableImplicitConversion: true,
        // },
    },
};
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
	return {
		database: {
			DB_NAME: process.env.DB_NAME,
			DB_PORT: process.env.DB_PORT,
			DB_USERNAME: process.env.DB_USERNAME,
			DB_PASSWORD: process.env.DB_PASSWORD,
		},

		API_KEY: process.env.API_KEY,
	};
});

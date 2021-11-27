import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
	return {
		DATABASE: {
			DB_CONNECTION: process.env.DB_CONNECTION,
			DB_USERNAME: process.env.DB_USERNAME,
			DB_PASSWORD: process.env.DB_PASSWORD,
			DB_HOST: process.env.DB_HOST,
			DB_PORT: process.env.DB_PORT,
			DB_DATABASE: process.env.DB_DATABASE,
		},
		DBA: {
			DBA_EMAIL: process.env.DBA_EMAIL,
			DBA_PASSWORD: process.env.DBA_PASSWORD,
		}
	};
});

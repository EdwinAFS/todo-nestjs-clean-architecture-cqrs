import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
	return {
		DBA: {
			DBA_EMAIL: process.env.DBA_EMAIL,
			DBA_PASSWORD: process.env.DBA_PASSWORD,
		},
		JWT: {
			JWT_SECRET: process.env.JWT_SECRET,
			EXPIRES_IN: process.env.EXPIRES_IN,
		},
		API: {
			APP_URL: process.env.APP_URL,
			PORT: process.env.PORT,
		}
	};
});

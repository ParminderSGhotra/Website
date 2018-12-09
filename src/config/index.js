import dotenv from 'dotenv';

dotenv.config();

const config = {
  loggingLevel: process.env.LOGGING_LEVEL || 'info',
  port: process.env.PORT,
  url: process.env.URL
};

export default config;
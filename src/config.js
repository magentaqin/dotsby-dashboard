const config = {
  apiPrefix: '/api/v1',
  port: {
    server: process.env.SERVER_PORT ? process.env.SERVER_PORT : 4000,
  },
}

export default config;

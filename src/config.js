const { env } = process;

const config = {
  apiPrefix: '/api/v1',
  port: {
    server: env.SERVER_PORT ? env.SERVER_PORT : 4000,
  },
}

export default config;

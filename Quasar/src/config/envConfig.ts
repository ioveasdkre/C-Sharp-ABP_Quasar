class EnvConfig {
  readonly apiUrl = process.env.API_URL;
  readonly apiServiceUrl = process.env.API_SERVICE_URL;
}

export const envConfig = new EnvConfig();

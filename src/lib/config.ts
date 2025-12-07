type Environment = {
  apiUrl: string;
};

const configs: Record<string, Environment> = {
  development: {
    apiUrl: "http://localhost:8080",
  },
  production: {
    apiUrl: "https://api.ochandorena.dev",
  },
};

export const getConfigEnv = () => configs[process.env.NODE_ENV ?? "production"];

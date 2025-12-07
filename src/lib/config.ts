type Environment = {
  apiUrl: string;
};

const configs: Record<string, Environment> = {
  development: {
    apiUrl: "http://192.168.1.9:8080",
  },
  production: {
    apiUrl: "https://api.ochandorena.dev",
  },
};

export const getConfigEnv = () => configs[process.env.NODE_ENV ?? "production"];

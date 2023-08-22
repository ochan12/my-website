type Environment = {
  apiUrl: string;
};

const configs: Record<string, Environment> = {
  development: {
    apiUrl: "https://lifesteps-api-riggoch.koyeb.app",
  },
  production: {
    apiUrl: "https://lifesteps-api-riggoch.koyeb.app",
  },
};

export const getConfigEnv = () => configs[process.env.NODE_ENV ?? "production"];

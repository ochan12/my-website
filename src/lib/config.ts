type Environment = {
  apiUrl: string;
};

const configs: Record<string, Environment> = {
  development: {
    apiUrl: "http://localhost:8080/",
  },
  production: {
    apiUrl: "https://lifesteps-api.herokuapp.com/",
  },
};

export const getConfigEnv = () => configs[process.env.NODE_ENV ?? "production"];

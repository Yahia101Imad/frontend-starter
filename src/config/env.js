const required = ["VITE_API_URL"];

required.forEach((key) => {
  if (!import.meta.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
  appVersion: import.meta.env.VITE_APP_VERSION,
};
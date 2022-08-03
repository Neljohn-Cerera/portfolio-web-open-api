module.exports = {
  apps: [
    {
      name: "web-open-api",
      script: "index.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

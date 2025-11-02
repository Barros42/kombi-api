module.exports = {
  apps: [
    {
      name: "kombi-api",         // Nome da aplicação no PM2
      script: "dist/main.js",    // Caminho para o arquivo compilado do NestJS
      instances: 1,              // Número de instâncias (1 = single thread, "max" = todos os núcleos)
      exec_mode: "fork",         // Modo fork (simples) ao invés de cluster
      watch: false,              // Desative watch em produção
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

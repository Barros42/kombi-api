module.exports = {
  apps: [
    {
      name: "kombios-gps-sync",
      script: "./kombios-gps-sync-service.py",
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000, // Delay para evitar loop de restart muito rápido
      error_file: "/var/log/kombios/gps-sync-error.log",
      out_file: "/var/log/kombios/gps-sync-out.log",
      time: true, // Adiciona timestamps aos logs
    },
  ],
};

export default {
  "type": "postgres",
  "host": process.env.DB_HOST || "ec2-3-217-68-126.compute-1.amazonaws.com",
  "port": process.env.DB_PORT || 5432,
  "username": process.env.DB_USER || "tzarpwxmnfacnz",
  "password": process.env.DB_PASS || "4d9cb9f2f2b527f83bf6a75d61aa6a60b646f57bdc22a3e34933bc69917310e5",
  "database": process.env.DB_DATABASE || "deu2ujkfopb5o",
  "migrations": ["./src/database/migrations/*ts"],
  "entities": ["./src/models/*ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  },
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}

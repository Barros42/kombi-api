CRIAR MIGRATIONS 

npx typeorm-ts-node-commonjs migration:generate ./src/migrations/NewMigration -d ./src/data-source.ts

RODAR MIGRATIONS

npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts

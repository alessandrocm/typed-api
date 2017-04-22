
export const connection = {
  host:     process.env.DB_HOST || '127.0.0.1',
  user:     process.env.DB_USER || 'dbadmin',
  password: process.env.DB_PWD  || 'admin',
  database: process.env.DB_NAME || 'typeddb',
  port:     process.env.DB_PORT || '5432',
  timeout:  process.env.DB_TIMEOUT || 10000,
  pool: {
    min: process.env.DB_POOL_MIN || 1,
    max: process.env.DB_POOL_MAX || 10
  }
};

export const migration = {
  tableName: process.env.MIGRATE_TABLE || 'migrations',
  directory: process.env.MIGRATE_DIR || './database/migrations'
};

export const seed = {
  directory: process.env.SEED_DIR || './database/seeds'
};

export function connectionString(db) {
  const {
    host,
    user,
    password,
    database,
    port
  } = connection;
  return `postgres://${user}:${password}@${host}:${port}/${db || database}`;
}

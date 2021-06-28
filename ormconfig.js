const { resolve } = require("path");

module.exports = [
  {
    name: "relational",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [resolve(__dirname, "src/models/*{.ts,.js}")],
    migrations: [resolve(__dirname, "src/migrations/*{.ts,.js}")],
    subscribers: [resolve(__dirname, "src/migrations/*{.ts,.js}")],
  },
  {
    name: "collections",
    type: process.env.DATABASE_COLLECTIONS_TYPE,
    url: process.env.DATABASE_COLLECTIONS_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    logging: true,
    synchronize: true,
    extra: {
      authSource: "admin",
    },
    entities: [resolve(__dirname, process.env.TYPEORM_ENTITIES)],
  },
];
